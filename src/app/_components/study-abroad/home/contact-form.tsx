"use client"
import Image from "next/image"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Label } from "@radix-ui/react-label"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Checkbox } from "~/components/ui/checkbox"
import { Button } from "~/components/ui/button"

const formSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be less than 50 characters"),
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be less than 50 characters"),
    email: z.string().email("Please enter a valid email address"),
    mobile: z
        .string()
        .min(10, "Mobile number must be at least 10 digits")
        .max(15, "Mobile number must be less than 15 digits")
        .regex(/^[0-9+\-\s()]+$/, "Please enter a valid mobile number"),
    destination: z.string().min(1, "Please select a study destination"),
    course: z.string().min(2, "Course name must be at least 2 characters"),
    studyMonth: z.string().min(1, "Please select a study month"),
    studyYear: z.string().min(1, "Please select a study year"),
    consent: z.boolean().refine((val) => val === true, "You must consent to continue"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactFormSection() {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            destination: "",
            course: "",
            studyMonth: "",
            studyYear: "",
            consent: false,
        },
    })

    const onSubmit = async (data: FormData) => {
        try {
            console.log("Form submitted:", data)
            await new Promise((resolve) => setTimeout(resolve, 1000))
            reset()
        } catch (error) {
            console.error("Submission error:", error)
        }
    }

    return (
        <div className="max-h-full w-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-3xl overflow-hidden relative mb-6">
            <div className="flex flex-col lg:flex-row items-center min-h-[600px]">
                {/* Left Image Section - Hidden on mobile */}
                <div className="hidden lg:flex flex-1 p-8 xl:p-12 justify-center">
                    <div className="relative w-full max-w-md">
                        <Image
                            src="/study-abroad-home/graduation-girls.jpg"
                            alt="Happy graduates in graduation caps"
                            width={500}
                            height={600}
                            className="rounded-2xl object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                <div className="flex-1 w-full p-6 sm:p-8 lg:p-12">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                            Let Our Team Reach Out To You
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName" className="text-white text-sm mb-2 block">
                                        First Name
                                    </Label>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="firstName"
                                                type="text"
                                                className={`bg-transparent border-2 text-white placeholder:text-white/60 focus:border-white rounded-lg h-12 ${errors.firstName ? "border-red-400" : "border-white/30"
                                                    }`}
                                                placeholder=""
                                            />
                                        )}
                                    />
                                    {errors.firstName && <p className="text-red-300 text-xs mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="lastName" className="text-white text-sm mb-2 block">
                                        Last Name
                                    </Label>
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="lastName"
                                                type="text"
                                                className={`bg-transparent border-2 text-white placeholder:text-white/60 focus:border-white rounded-lg h-12 ${errors.lastName ? "border-red-400" : "border-white/30"
                                                    }`}
                                                placeholder=""
                                            />
                                        )}
                                    />
                                    {errors.lastName && <p className="text-red-300 text-xs mt-1">{errors.lastName.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="email" className="text-white text-sm mb-2 block">
                                        Email ID
                                    </Label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="email"
                                                type="email"
                                                className={`bg-transparent border-2 text-white placeholder:text-white/60 focus:border-white rounded-lg h-12 ${errors.email ? "border-red-400" : "border-white/30"
                                                    }`}
                                                placeholder=""
                                            />
                                        )}
                                    />
                                    {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="mobile" className="text-white text-sm mb-2 block">
                                        Mobile Number
                                    </Label>
                                    <Controller
                                        name="mobile"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="mobile"
                                                type="tel"
                                                className={`bg-transparent border-2 text-white placeholder:text-white/60 focus:border-white rounded-lg h-12 ${errors.mobile ? "border-red-400" : "border-white/30"
                                                    }`}
                                                placeholder=""
                                            />
                                        )}
                                    />
                                    {errors.mobile && <p className="text-red-300 text-xs mt-1">{errors.mobile.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-white text-sm mb-2 block">Your preferred study destination</Label>
                                    <Controller
                                        name="destination"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger
                                                    className={`bg-transparent border-2 text-white h-12 rounded-lg ${errors.destination ? "border-red-400" : "border-white/30"
                                                        }`}
                                                >
                                                    <SelectValue placeholder="Select Destination" className="text-white/60" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="usa">USA</SelectItem>
                                                    <SelectItem value="uk">UK</SelectItem>
                                                    <SelectItem value="canada">Canada</SelectItem>
                                                    <SelectItem value="australia">Australia</SelectItem>
                                                    <SelectItem value="germany">Germany</SelectItem>
                                                    <SelectItem value="newzealand">New Zealand</SelectItem>
                                                    <SelectItem value="singapore">Singapore</SelectItem>
                                                    <SelectItem value="ireland">Ireland</SelectItem>
                                                    <SelectItem value="switzerland">Switzerland</SelectItem>
                                                    <SelectItem value="dubai">Dubai</SelectItem>
                                                    <SelectItem value="france">France</SelectItem>
                                                    <SelectItem value="spain">Spain</SelectItem>
                                                    <SelectItem value="malaysia">Malaysia</SelectItem>
                                                    <SelectItem value="italy">Italy</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.destination && <p className="text-red-300 text-xs mt-1">{errors.destination.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="course" className="text-white text-sm mb-2 block">
                                        Course
                                    </Label>
                                    <Controller
                                        name="course"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="course"
                                                type="text"
                                                className={`bg-transparent border-2 text-white placeholder:text-white/60 focus:border-white rounded-lg h-12 ${errors.course ? "border-red-400" : "border-white/30"
                                                    }`}
                                                placeholder=""
                                            />
                                        )}
                                    />
                                    {errors.course && <p className="text-red-300 text-xs mt-1">{errors.course.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-white text-sm mb-2 block">When do you plan to study?</Label>
                                    <Controller
                                        name="studyMonth"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger
                                                    className={`bg-transparent border-2 text-white h-12 rounded-lg ${errors.studyMonth ? "border-red-400" : "border-white/30"
                                                        }`}
                                                >
                                                    <SelectValue placeholder="Select Month" className="text-white/60" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="january">January</SelectItem>
                                                    <SelectItem value="february">February</SelectItem>
                                                    <SelectItem value="march">March</SelectItem>
                                                    <SelectItem value="april">April</SelectItem>
                                                    <SelectItem value="may">May</SelectItem>
                                                    <SelectItem value="june">June</SelectItem>
                                                    <SelectItem value="july">July</SelectItem>
                                                    <SelectItem value="august">August</SelectItem>
                                                    <SelectItem value="september">September</SelectItem>
                                                    <SelectItem value="october">October</SelectItem>
                                                    <SelectItem value="november">November</SelectItem>
                                                    <SelectItem value="december">December</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.studyMonth && <p className="text-red-300 text-xs mt-1">{errors.studyMonth.message}</p>}
                                </div>
                                <div>
                                    <Label className="text-white text-sm mb-2 block">Your preferred year</Label>
                                    <Controller
                                        name="studyYear"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger
                                                    className={`bg-transparent border-2 text-white h-12 rounded-lg ${errors.studyYear ? "border-red-400" : "border-white/30"
                                                        }`}
                                                >
                                                    <SelectValue placeholder="Select Year" className="text-white/60" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="2024">2024</SelectItem>
                                                    <SelectItem value="2025">2025</SelectItem>
                                                    <SelectItem value="2026">2026</SelectItem>
                                                    <SelectItem value="2027">2027</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.studyYear && <p className="text-red-300 text-xs mt-1">{errors.studyYear.message}</p>}
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 pt-2">
                                <Controller
                                    name="consent"
                                    control={control}
                                    render={({ field }) => (
                                        <Checkbox
                                            id="consent"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className={`border-2 data-[state=checked]:bg-white data-[state=checked]:text-blue-600 mt-1 ${errors.consent ? "border-red-400" : "border-white/30"
                                                }`}
                                        />
                                    )}
                                />
                                <div>
                                    <Label htmlFor="consent" className="text-white/90 text-sm leading-relaxed">
                                        I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this
                                        enquiry.
                                    </Label>
                                    {errors.consent && <p className="text-red-300 text-xs mt-1">{errors.consent.message}</p>}
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}