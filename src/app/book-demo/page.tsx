"use client"

import { useState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { ArrowLeft, ChevronLeft, ChevronRight, FileText, Plus, Calendar, Printer, Search } from "lucide-react"
import { Avatar, AvatarFallback } from "../../components/ui/avatar"
import { Alert, AlertDescription } from "../../components/ui/alert"
import MainSection from "./main"
import Footer from "../_components/Footer"
import { useQRCode } from "../../hooks/qr-code"

interface Course {
  id: string
  name: string
  description: string
  price: number
  category: string
}

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

interface UserInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  whatsapp: string
  comments: string
  language: string
}

interface BookingItem {
  id: string
  course: Course
  date: string
  timeSlot: TimeSlot
  userInfo: UserInfo
}

// Sample data
const courses: Course[] = [
  {
    id: "french",
    name: "French Classes",
    description:
      "French is an official language in 29 countries across multiple continents. French is also one of six official languages used in the United Nations.",
    price: 0,
    category: "Foreign Language",
  },
  {
    id: "german",
    name: "German Classes",
    description:
      "German is one of the major languages of the world. It is the most spoken native language within the European Union.",
    price: 0,
    category: "Foreign Language",
  },
  {
    id: "spanish",
    name: "Spanish Classes",
    description:
      "As a Romance language, Spanish is a descendant of Latin and has one of the smaller degrees of difference from it",
    price: 0,
    category: "Foreign Language",
  },
  {
    id: "spoken-english-group",
    name: "Spoken English Group Classes",
    description:
      "Learn spoken English in group classes with expert trainers certified by British Council and Cambridge. Join the course to remove your hesitation of public speaking",
    price: 0,
    category: "Spoken English",
  },
  {
    id: "spoken-english-personal",
    name: "Spoken English Personal Training",
    description:
      "If you want more personalised classes to improve your communication skills in English you can join National Institute of Language's spoken English personal training sessions.",
    price: 0,
    category: "Spoken English",
  },
  {
    id: "business-english",
    name: "Business English-Advanced",
    description:
      "If you are looking to improve your communication skills for Business Communication this is the best course for you.",
    price: 0,
    category: "Spoken English",
  },
  {
    id: "ielts-academic",
    name: "IELTS Academic",
    description:
      "Study at a university or college at undergraduate or postgraduate level. IELTS Academic is for people planning to study in higher education. Or, for example, if you seek professional registration. This test assesses if you're ready to begin studying or training where English is the language used.",
    price: 0,
    category: "IELTS Preparation",
  },
  {
    id: "ielts-general",
    name: "IELTS General",
    description:
      "IELTS General Training measures English language proficiency in a practical, everyday context. The tasks and tests reflect both workplace and social situations.",
    price: 0,
    category: "IELTS Preparation",
  },
  {
    id: "kids-service",
    name: "Spoken English Classes",
    description:
      "If you want to give your child experience of communicating with a group of people while participating in learning activities, this is the best platform to do that.",
    price: 0,
    category: "Kids Classes",
  },
]

const categories = [
  {
    id: "ielts",
    name: "IELTS Preparation",
    services: 2,
    image: "../home/book-demo-images/ielts.jpg?height=40&width=40",
  },
  {
    id: "spoken",
    name: "Spoken English",
    services: 3,
    image: "../home/book-demo-images/spoken-english.webp?height=40&width=40",
  },
  { id: "kids", name: "Kids Classes", services: 1, image: "../home/book-demo-images/kids.jpg?height=40&width=40" },
  { id: "foreign", name: "Foreign Language", services: 3, image: "../home/book-demo-images/fl.jpg?height=40&width=40" },
]

const timeSlots: TimeSlot[] = [
  { id: "morning", time: "11:00 am - 12:00 pm", available: true },
  { id: "afternoon", time: "04:00 pm - 05:00 pm", available: true },
  { id: "evening", time: "08:00 pm - 09:00 pm", available: true },
]

// Generate a random confirmation code
const generateConfirmationCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = ""
  for (let i = 0; i < 7; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

const generateGoogleCalendarLink = (date: string, timeSlot: TimeSlot, course: Course, timezone: string) => {
  const startDate = new Date(
    date + "T" + (timeSlot?.time?.split(" - ")[0]?.replace(" am", ":00").replace(" pm", ":00") || "")
  )
  if (timeSlot.time.includes("pm") && !timeSlot.time.includes("12:")) {
    startDate.setHours(startDate.getHours() + 12)
  }

  const endDate = new Date(startDate)
  endDate.setHours(endDate.getHours() + 1) // 1 hour duration

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${course.name} - Demo Class`,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    details: `Demo class for ${course.name}. ${course.description}`,
    location: "Online Meeting",
    ctz: timezone,
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export default function BookingSystem() {
  const [timezones, setTimezones] = useState<string[]>([])
  const [selectedTimezone, setSelectedTimezone] = useState("Asia/Kolkata")
  const [isLoadingTimezones, setIsLoadingTimezones] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)) // June 2025
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [confirmationCode, setConfirmationCode] = useState("")
  const [bookings, setBookings] = useState<BookingItem[]>([])
  const [currentBooking, setCurrentBooking] = useState<BookingItem>({
    id: "",
    course: {} as Course,
    date: "",
    timeSlot: {} as TimeSlot,
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      whatsapp: "",
      comments: "",
      language: "I prefer Hindi-English Mixed",
    },
  })
  const [calendarLink, setCalendarLink] = useState<string>("")

  // Add useEffect to fetch timezones
  useEffect(() => {
    if (step === 7 && currentBooking.date && currentBooking.timeSlot && currentBooking.course) {
      const link = generateGoogleCalendarLink(
        currentBooking.date,
        currentBooking.timeSlot,
        currentBooking.course,
        selectedTimezone,
      )
      setCalendarLink(link)
    }
  }, [step, currentBooking, selectedTimezone])

  const { qrCode, loading: qrLoading } = useQRCode(calendarLink)

  useEffect(() => {
    const fetchTimezones = async () => {
      setIsLoadingTimezones(true)
      try {
        const response = await fetch("https://timeapi.io/api/timezone/availabletimezones")
        const data = await response.json()
        setTimezones(data)
      } catch (error) {
        console.error("Failed to fetch timezones:", error)
        // Fallback to some common timezones
        setTimezones(["Asia/Kolkata", "Asia/Mumbai", "Asia/Delhi", "UTC", "America/New_York", "Europe/London"])
      } finally {
        setIsLoadingTimezones(false)
      }
    }

    fetchTimezones()
  }, [])

  const validateField = (field: string, value: string): string => {
    if (field === "country" && !value) {
      return "Country of current residence (Eg. India) can not be blank"
    }
    if (field === "firstName" && !value) {
      return "First name is required"
    }
    if (field === "lastName" && !value) {
      return "Last name is required"
    }
    if (field === "email" && !value) {
      return "Email is required"
    }
    if (field === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      return "Email is invalid"
    }
    if (field === "phone" && !value) {
      return "Phone number is required"
    }
    return ""
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setStep(2)
  }

  const handleCourseSelect = (course: Course) => {
    setCurrentBooking((prev) => ({ ...prev, course }))
    setStep(3) // Now step 3 will be country selection
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
  }

  const handleTimeSlotSelect = (timeSlot: TimeSlot) => {
    setCurrentBooking((prev) => ({
      ...prev,
      date: selectedDate,
      timeSlot,
    }))
    setStep(5) // Go to personal info step
  }

  const handleUserInfoChange = (field: string, value: string) => {
    setCurrentBooking((prev) => ({
      ...prev,
      userInfo: { ...prev.userInfo, [field]: value },
    }))

    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleNext = () => {
    if (step === 3) {
      // Validate country field
      const countryError = validateField("country", currentBooking.userInfo.country)
      if (countryError) {
        setErrors((prev) => ({ ...prev, country: countryError }))
        return
      }
      setStep(4) // Go from country selection to date selection
    } else if (step === 5) {
      // Validate user info fields
      const newErrors: Record<string, string> = {}
      const fieldsToValidate = ["firstName", "lastName", "email", "phone"]

      fieldsToValidate.forEach((field) => {
        const error = validateField(field, currentBooking.userInfo[field as keyof UserInfo] as string)
        if (error) {
          newErrors[field] = error
        }
      })

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }

      setStep(6) // Go to verification step
    } else if (step === 6) {
      // Generate confirmation code and move to confirmation step
      const code = generateConfirmationCode()
      setConfirmationCode(code)

      // Add booking ID
      const bookingWithId = {
        ...currentBooking,
        id: Date.now().toString(),
      }

      // Add to bookings list
      setBookings((prev) => [...prev, bookingWithId])

      setStep(7) // Go to confirmation step
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleAddMore = () => {
    // Reset current booking but keep user info
    const userInfo = currentBooking.userInfo
    setCurrentBooking({
      id: "",
      course: {} as Course,
      date: "",
      timeSlot: {} as TimeSlot,
      userInfo,
    })
    setSelectedCategory("")
    setSelectedDate("")
    setStep(1) // Go back to first step
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // Previous month days
    for (let i = 0; i < firstDay; i++) {
      const prevDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), -firstDay + i + 1)
      days.push(
        <button key={`prev-${i}`} className="w-10 h-10 text-gray-400 hover:bg-gray-100 rounded" disabled>
          {prevDate.getDate()}
        </button>,
      )
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const isAvailable = day >= 11 && day <= 30 && ![21, 28].includes(day)
      const isSelected = selectedDate === dateStr

      days.push(
        <button
          key={day}
          onClick={() => isAvailable && handleDateSelect(dateStr)}
          className={`w-8 h-8 md:w-10 md:h-10 rounded text-sm ${
            isSelected
              ? "bg-blue-500 text-white"
              : isAvailable
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : "text-gray-400 hover:bg-gray-100"
          }`}
          disabled={!isAvailable}
        >
          {day}
        </button>,
      )
    }

    return days
  }

  const filteredCourses = selectedCategory
    ? courses.filter((course) => {
        if (selectedCategory === "ielts") return course.category === "IELTS Preparation"
        if (selectedCategory === "spoken") return course.category === "Spoken English"
        if (selectedCategory === "foreign") return course.category === "Foreign Language"
        if (selectedCategory === "kids") return course.category === "Kids Classes"
        return false
      })
    : courses

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const getTotalPrice = () => {
    return bookings.reduce((total, booking) => total + booking.course.price, 0)
  }

  return (
    <div>
      <MainSection />
      <div className="bg-gray-50 flex flex-col   md:flex-row m-2 md:m-30 border-2 md:border-4">
        {/* Left Sidebar */}
        <div className="w-full md:w-80 bg-white p-4 md:p-6 shadow-md md:shadow-lg">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              {step === 7 ? (
                <div className="flex justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              ) : step === 6 ? (
                <Search className="w-6 h-6 text-blue-600" />
              ) : (
                <FileText className="w-6 h-6 text-blue-600" />
              )}
            </div>
            <div>
              {step === 7 ? (
                <>
                  <h2 className="text-xl font-semibold">Confirmation</h2>
                  <p className="text-sm text-gray-600">
                    Your appointment has been successfully scheduled. Please retain this confirmation for your record.
                  </p>
                </>
              ) : step === 6 ? (
                <>
                  <h2 className="text-xl font-semibold">Verify Details</h2>
                  <p className="text-sm text-gray-600">
                    Double check your appointment details and click submit button if everything is correct
                  </p>
                </>
              ) : step === 5 ? (
                <>
                  <h2 className="text-xl font-semibold">Enter Information</h2>
                  <p className="text-sm text-gray-600">
                    Please provide your contact details(with country code in number) so we can send you a confirmation
                    and other contact info
                  </p>
                </>
              ) : step === 3 ? (
                <>
                  <h2 className="text-xl font-semibold">Where are you from?</h2>
                  <p className="text-sm text-gray-600">This will ensure proper communication</p>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="font-semibold text-3xl mb-8">Select Demo</h2>
                    <p className="text-sm text-gray-600 mt-2">
                      Please select a course for which you want to schedule an appointment
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="space-y-6 p-6 bg-gray-50 border-t mt-4">
            <div>
              <h3 className="font-semibold mb-2">Questions?</h3>
              <p className="text-sm text-gray-600">Call +91 9569285185 for help</p>
            </div>

            {step >= 3 && (
              <div>
                <Label htmlFor="timezone">Times are in:</Label>
                <Select value={selectedTimezone} onValueChange={setSelectedTimezone} disabled={isLoadingTimezones}>
                  <SelectTrigger>
                    <SelectValue placeholder={isLoadingTimezones ? "Loading..." : "Select timezone"} />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {timezones.map((timezone) => (
                      <SelectItem key={timezone} value={timezone}>
                        {timezone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="flex-1 p-4 md:p-8">
            {step === 1 && (
              <div>
                <h1 className="text-2xl font-bold mb-6 text-center">Book Free Demo</h1>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className={`cursor-pointer transition-all hover:shadow-md`}
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      <CardContent className="flex items-center gap-2 md:gap-4 p-3 md:p-4">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          className="w-8 h-8 md:w-10 md:h-10 rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm md:text-base">{category.name}</h3>
                        </div>
                        <span className="text-xs md:text-sm text-gray-500">{category.services} Services</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Book Free Demo</h1>
                <div className="space-y-4">
                  {filteredCourses.map((course) => (
                    <Card
                      key={course.id}
                      className={`cursor-pointer transition-all hover:shadow-md `}
                      onClick={() => handleCourseSelect(course)}
                    >
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{course.name}</h3>
                        <p className="text-gray-600 text-sm">{course.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button variant="ghost" className="mt-6 flex items-center gap-2" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </div>
            )}

            {step === 3 && (
              <div>
                <h1 className="text-2xl font-bold mb-2">Your country of current residence</h1>
                <p className="text-gray-600 mb-6">This will ensure proper communication</p>

                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div>
                    <Label htmlFor="country">Country of current residence (Eg. India)</Label>
                    {errors.country && (
                      <Alert className="mb-4  bg-red-50 text-red-800 border-red-200">
                        <AlertDescription>{errors.country}</AlertDescription>
                      </Alert>
                    )}
                    <Input
                      id="country"
                      placeholder="Country of current residence (Eg. India)"
                      value={currentBooking.userInfo.country}
                      onChange={(e) => handleUserInfoChange("country", e.target.value)}
                      className={errors.country ? "border-red-500" : ""}
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp" className="mb-2">
                      WhatsApp Number (For meeting link sharing) Leave blank if both numbers are same.
                    </Label>
                    <Input
                      id="whatsapp"
                      placeholder="WhatsApp Number (For meeting link sharing) Leave blank if both numbers are same."
                      value={currentBooking.userInfo.whatsapp}
                      onChange={(e) => handleUserInfoChange("whatsapp", e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-4 md:mt-6">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 md:gap-2 text-sm md:text-base"
                    onClick={handleBack}
                  >
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                    Back
                  </Button>
                  <Button className="text-sm md:text-base" onClick={handleNext}>
                    Next →
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Date & Time Selection</h1>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">
                      {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </h2>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
                        }
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
                        }
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                      <div key={day} className="text-center text-xs md:text-sm font-medium text-gray-500 p-1 md:p-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-6">{renderCalendar()}</div>

                  {selectedDate && (
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Pick a slot for{" "}
                        {new Date(selectedDate).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                        })}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">TIMEZONE: {selectedTimezone.toUpperCase()}</p>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot.id}
                            className={`text-xs md:text-sm `}
                            onClick={() => handleTimeSlotSelect(slot)}
                          >
                            {slot.time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Button variant="ghost" className="mt-6 flex items-center gap-2" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </div>
            )}

            {step === 5 && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Your Information</h1>
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md font-medium">
                        Contact Information
                      </button>
                      <span className="text-gray-400">Not You?</span>
                      <button className="text-blue-600">Logout</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      {errors.firstName && (
                        <Alert className="mb-2 bg-red-50 text-red-800 border-red-200">
                          <AlertDescription>{errors.firstName}</AlertDescription>
                        </Alert>
                      )}
                      <Input
                        id="firstName"
                        placeholder="First Name"
                        value={currentBooking.userInfo.firstName}
                        onChange={(e) => handleUserInfoChange("firstName", e.target.value)}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      {errors.lastName && (
                        <Alert className="mb-2 bg-red-50 text-red-800 border-red-200">
                          <AlertDescription>{errors.lastName}</AlertDescription>
                        </Alert>
                      )}
                      <Input
                        id="lastName"
                        placeholder="Last Name"
                        value={currentBooking.userInfo.lastName}
                        onChange={(e) => handleUserInfoChange("lastName", e.target.value)}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      {errors.phone && (
                        <Alert className="mb-2 bg-red-50 text-red-800 border-red-200">
                          <AlertDescription>{errors.phone}</AlertDescription>
                        </Alert>
                      )}
                      <div className="flex">
                        <div className="flex items-center px-3 border border-r-0 rounded-l bg-gray-50">🇮🇳 +91</div>
                        <Input
                          id="phone"
                          placeholder="81234 56789"
                          className={`rounded-l-none ${errors.phone ? "border-red-500" : ""}`}
                          value={currentBooking.userInfo.phone}
                          onChange={(e) => handleUserInfoChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      {errors.email && (
                        <Alert className="mb-2 bg-red-50 text-red-800 border-red-200">
                          <AlertDescription>{errors.email}</AlertDescription>
                        </Alert>
                      )}
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        value={currentBooking.userInfo.email}
                        onChange={(e) => handleUserInfoChange("email", e.target.value)}
                        className={errors.email ? "border-red-500" : ""}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="comments">Add Comments</Label>
                    <Textarea
                      id="comments"
                      placeholder="Add Comments"
                      value={currentBooking.userInfo.comments}
                      onChange={(e) => handleUserInfoChange("comments", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Would you like your demo class in English or Bilingual (Hindi-English Mixed)</Label>
                    <Select
                      value={currentBooking.userInfo.language}
                      onValueChange={(value) => handleUserInfoChange("language", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="I prefer Hindi-English Mixed">I prefer Hindi-English Mixed</SelectItem>
                        <SelectItem value="English Only">English Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between mt-4 md:mt-6">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 md:gap-2 text-sm md:text-base"
                    onClick={handleBack}
                  >
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                    Back
                  </Button>
                  <Button className="text-sm md:text-base" onClick={handleNext}>
                    Next →
                  </Button>
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Verify Booking Details</h1>

                <div className="bg-white rounded-lg p-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{currentBooking.course.name}</h2>
                    <p className="text-gray-600">
                      {formatDate(currentBooking.date)}, {currentBooking.timeSlot.time} ({selectedTimezone})
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-600">
                      Country of current residence (Eg. India):{" "}
                      <span className="font-medium">{currentBooking.userInfo.country}</span>
                    </p>
                    {currentBooking.userInfo.whatsapp && (
                      <p className="text-gray-600">
                        WhatsApp Number (For meeting link sharing):{" "}
                        <span className="font-medium">{currentBooking.userInfo.whatsapp}</span>
                      </p>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2">Customer</h3>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-gray-200">
                        <AvatarFallback>
                          {getInitials(currentBooking.userInfo.firstName, currentBooking.userInfo.lastName)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">
                          {currentBooking.userInfo.firstName} {currentBooking.userInfo.lastName}
                        </p>
                        <p className="text-sm text-gray-600">{currentBooking.userInfo.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-sm text-gray-600 mb-2">COST BREAKDOWN</h4>
                    <div className="flex justify-between">
                      <span>{currentBooking.course.name}</span>
                      <span>₹{currentBooking.course.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg mt-2 pt-2 border-t">
                      <span>Total Price</span>
                      <span>₹{currentBooking.course.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button className="w-full" onClick={() => handleNext()}>
                    Add more items to this order
                  </Button>
                </div>

                <div className="flex justify-between mt-4 md:mt-6">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 md:gap-2 text-sm md:text-base"
                    onClick={handleBack}
                  >
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                    Back
                  </Button>
                  <Button className="text-sm md:text-base" onClick={handleNext}>
                    Submit →
                  </Button>
                </div>
              </div>
            )}

            {step === 7 && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Appointment Confirmation</h1>

                <div className="bg-white rounded-lg p-6 space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div>
                      <p className="text-gray-600 text-sm">CONFIRMATION #</p>
                      <h2 className="text-xl md:text-3xl font-bold">{confirmationCode}</h2>
                    </div>
                    <div className="text-center mt-4 md:mt-0">
                      <div className="bg-gray-100 p-4 rounded-lg mb-1">
                        {qrLoading ? (
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 animate-pulse rounded"></div>
                        ) : qrCode ? (
                          <img
                            src={qrCode || "/placeholder.svg"}
                            alt="QR Code for Google Calendar"
                            className="w-16 h-16 md:w-20 md:h-20"
                          />
                        ) : (
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 flex items-center justify-center text-gray-400">
                            No QR
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">SCAN TO ADD TO CALENDAR</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 w-full">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 justify-center"
                      onClick={() => {
                        if (calendarLink) {
                          window.open(calendarLink, "_blank")
                        }
                      }}
                    >
                      <Calendar className="w-4 h-4" />
                      Add to Google Calendar
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 justify-center">
                      <Printer className="w-4 h-4" />
                      Print
                    </Button>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">{currentBooking.course.name}</h2>
                    <p className="text-gray-600">
                      {formatDate(currentBooking.date)}, {currentBooking.timeSlot.time} ({selectedTimezone})
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-600">
                      Country of current residence (Eg. India):{" "}
                      <span className="font-medium">{currentBooking.userInfo.country}</span>
                    </p>
                    {currentBooking.userInfo.whatsapp && (
                      <p className="text-gray-600">
                        WhatsApp Number (For meeting link sharing):{" "}
                        <span className="font-medium">{currentBooking.userInfo.whatsapp}</span>
                      </p>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2">Customer</h3>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-gray-200">
                        <AvatarFallback>
                          {getInitials(currentBooking.userInfo.firstName, currentBooking.userInfo.lastName)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">
                          {currentBooking.userInfo.firstName} {currentBooking.userInfo.lastName}
                        </p>
                        <p className="text-sm text-gray-600">{currentBooking.userInfo.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-sm text-gray-600 mb-2">COST BREAKDOWN</h4>
                    <div className="flex justify-between">
                      <span>{currentBooking.course.name}</span>
                      <span>₹{currentBooking.course.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 mt-2">
                      <span>Payments and Credits</span>
                      <span>₹0.00</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg mt-2 pt-2 border-t">
                      <span>Balance Due</span>
                      <span>₹{currentBooking.course.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" className="mt-6 flex items-center gap-2" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </div>
            )}
          </div>

          {/* Right Summary Panel */}
          <div className="w-full md:w-80 bg-white p-4 md:p-6 shadow-md md:shadow-lg border-t md:border-l">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Summary</h2>
              {step === 5 && (
                <Button variant="link" className="text-blue-500 p-0">
                  Checkout →
                </Button>
              )}
            </div>

            {/* Current booking summary */}
            {currentBooking.course?.name && (
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{currentBooking.course.name}</h3>
                    {step >= 5 && <button className="text-gray-400 hover:text-gray-600">—</button>}
                  </div>
                  {currentBooking.date && currentBooking.timeSlot && (
                    <p className="text-sm text-gray-600">
                      {formatDate(currentBooking.date)}, {currentBooking.timeSlot.time} ({selectedTimezone})
                    </p>
                  )}
                </div>

                {currentBooking.userInfo.firstName && (
                  <div className="text-sm">
                    <p className="text-gray-600">
                      Customer:{" "}
                      <span className="font-medium">
                        {currentBooking.userInfo.firstName} {currentBooking.userInfo.lastName}
                      </span>
                    </p>
                  </div>
                )}

                {currentBooking.userInfo.country && (
                  <div>
                    <p className="text-sm text-gray-600">
                      Country of current residence (Eg. India):{" "}
                      <span className="font-medium">{currentBooking.userInfo.country}</span>
                    </p>
                    {currentBooking.userInfo.whatsapp && (
                      <p className="text-sm text-gray-600">
                        WhatsApp Number (For meeting link sharing):{" "}
                        <span className="font-medium">{currentBooking.userInfo.whatsapp}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Previous bookings */}
            {bookings.length > 0 && (
              <div className="space-y-4 mb-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{booking.course.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {formatDate(booking.date)}, {booking.timeSlot.time} ({selectedTimezone})
                    </p>
                    <p className="text-sm text-gray-600">
                      Customer:{" "}
                      <span className="font-medium">
                        {booking.userInfo.firstName} {booking.userInfo.lastName}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}

            {step >= 4 && currentBooking.course?.name && (
              <Button variant="outline" className="w-full flex items-center gap-2 mb-6" onClick={handleAddMore}>
                <Plus className="w-4 h-4" />
                Add More
              </Button>
            )}

            {(currentBooking.course?.name || bookings.length > 0) && (
              <div className="border-t pt-4">
                <h4 className="font-semibold text-sm text-gray-600 mb-2">COST BREAKDOWN</h4>
                {currentBooking.course?.name && (
                  <div className="flex justify-between">
                    <span>{currentBooking.course.name}</span>
                    <span>₹{currentBooking.course.price.toFixed(2)}</span>
                  </div>
                )}
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex justify-between">
                    <span>{booking.course.name}</span>
                    <span>₹{booking.course.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between font-semibold text-lg mt-2 pt-2 border-t">
                  <span>Total Price</span>
                  <span>₹{(getTotalPrice() + (currentBooking.course?.price || 0)).toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
