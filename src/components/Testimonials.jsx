import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        quote: "Tempat paling cozy buat nugas. Kopinya enak, baristanya ramah banget. Playlist lagunya juga asik!",
        name: "Muhammad Rafi Fatihul Ihsan",
        role: "Regular Customer",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rafi&backgroundColor=c0aede"
    },
    {
        quote: "KopiNongki punya manual brew terbaik di kota ini. Beans-nya selalu fresh dan seduhannya pas.",
        name: "Muthia Rafah Faza Izzati",
        role: "Coffee Enthusiast",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Muthia&backgroundColor=ffdfbf&hair=long01"
    },
    {
        quote: "Sering meeting sama klien di sini. Suasananya profesional tapi tetap santai. Recommended!",
        name: "Mochii Ndutt",
        role: "Freelancer",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mochii&backgroundColor=b6e3f4"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#D2691E]/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#8B4513]/5 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#2C1810] mb-4">Stories from the Tribe</h2>
                    <div className="h-1 w-20 bg-[#D2691E] mx-auto rounded-full"></div>
                </div>

                <div className="relative bg-[#FAF9F6] rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100">
                    <Quote className="absolute top-10 left-10 w-12 h-12 text-[#D2691E]/20" />

                    <div className="relative h-auto md:h-64 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-4xl"
                            >
                                <div className="shrink-0">
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                                        <img
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-xl md:text-2xl font-serif italic text-[#5D4037] mb-6 leading-relaxed">
                                        "{testimonials[activeIndex].quote}"
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#2C1810]">{testimonials[activeIndex].name}</h4>
                                        <span className="text-[#8B4513] font-medium">{testimonials[activeIndex].role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center md:justify-end gap-4 mt-8 md:mt-0 md:absolute md:bottom-12 md:right-12">
                        <button onClick={prevTestimonial} className="p-3 rounded-full bg-white hover:bg-[#2C1810] hover:text-white text-[#2C1810] shadow-md transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={nextTestimonial} className="p-3 rounded-full bg-[#2C1810] text-white shadow-md hover:scale-105 transition-all">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
