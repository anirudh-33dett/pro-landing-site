"use client";

import { useState, useEffect } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

// Country codes data
const countries = [
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
];

// Features list
const featuresList = [
  { id: "few-shot", label: "Few Shot Annotation" },
  { id: "auto", label: "Auto Annotation" },
  { id: "vision", label: "Vision Model Development" },
  { id: "text", label: "Text Annotations" },
  { id: "llm-fine", label: "LLM Fine Tuning" },
  { id: "llm-deploy", label: "LLM Deployment" },
  { id: "custom", label: "Custom" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    details: "",
    customFeature: "",
  });

  const [countryCode, setCountryCode] = useState(countries[2]); // Default to India (+91)
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCustomFeature, setShowCustomFeature] = useState(false);

  // Check if custom is selected to show the custom input field
  useEffect(() => {
    setShowCustomFeature(selectedFeatures.includes("custom"));
  }, [selectedFeatures]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFeatureSelect = (featureId: string) => {
    setSelectedFeatures((prev) => {
      // If already selected, remove it
      if (prev.includes(featureId)) {
        return prev.filter((id) => id !== featureId);
      }
      // Otherwise add it
      return [...prev, featureId];
    });
  };

  const removeFeature = (featureId: string) => {
    setSelectedFeatures((prev) => prev.filter((id) => id !== featureId));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setIsSuccess(false);

    // Prepare the complete form data with selected features
    const completeFormData = {
      ...formData,
      phone: countryCode.code + formData.phone,
      features: selectedFeatures
        .map((id) => {
          if (id === "custom") {
            return formData.customFeature;
          }
          return featuresList.find((f) => f.id === id)?.label;
        })
        .filter(Boolean),
    };

    try {
      // Send the form data to Formspree
      const response = await fetch("https://formspree.io/f/xzzrgkdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(completeFormData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        designation: "",
        details: "",
        customFeature: "",
      });
      setSelectedFeatures([]);
      setSubmitMessage("Message sent! We will get back to you soon.");
      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending form:", error);
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      );
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-auto w-[482px] rounded-lg border border-solid border-[#4C00FE] px-6 pt-3 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-600 mb-6">
        Have questions about OpAI Pro? Our team is here to help. Fill out the
        form and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name" className="mb-1">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Jack Sparrow"
            required
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="email" className="mb-1">
            Work Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. jack@opiai.tech"
            required
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="phone" className="mb-1">
            Mobile Number
          </Label>
          <div className="flex">
            <Popover open={isCountryOpen} onOpenChange={setIsCountryOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={isCountryOpen}
                  className="w-[110px] justify-between mr-2"
                >
                  <span className="flex items-center">
                    <span className="mr-1">{countryCode.flag}</span>
                    <span>{countryCode.code}</span>
                  </span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search country..." />
                  <CommandList>
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup className="max-h-[300px] overflow-auto">
                      {countries.map((country) => (
                        <CommandItem
                          key={country.code}
                          value={country.name}
                          onSelect={() => {
                            setCountryCode(country);
                            setIsCountryOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              countryCode.code === country.code
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          <span className="mr-2">{country.flag}</span>
                          <span>
                            {country.name} ({country.code})
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="flex-1"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="designation" className="mb-1">
            Designation
          </Label>
          <Input
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="e.g. Product Manager"
            required
          />
        </div>

        <div className="mb-4">
          <Label className="mb-1">Features of Interest</Label>
          <Popover open={isFeaturesOpen} onOpenChange={setIsFeaturesOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={isFeaturesOpen}
                className="w-full justify-between"
              >
                {selectedFeatures.length > 0 ? (
                  <span className="text-left font-normal">
                    {selectedFeatures.length} feature
                    {selectedFeatures.length > 1 ? "s" : ""} selected
                  </span>
                ) : (
                  <span className="text-left font-normal text-muted-foreground">
                    Select features
                  </span>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search features..." />
                <CommandList>
                  <CommandEmpty>No feature found.</CommandEmpty>
                  <CommandGroup className="max-h-[200px] overflow-auto">
                    {featuresList.map((feature) => (
                      <CommandItem
                        key={feature.id}
                        value={feature.label}
                        onSelect={() => handleFeatureSelect(feature.id)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedFeatures.includes(feature.id)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        <span>{feature.label}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {selectedFeatures.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {selectedFeatures.map((featureId) => {
                const feature = featuresList.find((f) => f.id === featureId);
                if (!feature) return null;
                return (
                  <Badge
                    key={featureId}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {feature.label}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeFeature(featureId)}
                    />
                  </Badge>
                );
              })}
            </div>
          )}
        </div>

        {showCustomFeature && (
          <div className="mb-4">
            <Label htmlFor="customFeature" className="mb-1">
              Specify Custom Feature
            </Label>
            <Input
              id="customFeature"
              name="customFeature"
              value={formData.customFeature}
              onChange={handleChange}
              placeholder="Describe the custom feature you're interested in"
              required={showCustomFeature}
            />
          </div>
        )}

        <div className="mb-6">
          <Label htmlFor="details" className="mb-1">
            Share more details
          </Label>
          <Textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Tell us more about your requirements"
            className="min-h-[100px]"
            required
          />
        </div>

        {/* Hidden Formspree honeypot field to prevent spam */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        {submitMessage && (
          <div
            className={`mb-4 p-3 rounded text-sm ${
              isSuccess
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white mb-10"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
