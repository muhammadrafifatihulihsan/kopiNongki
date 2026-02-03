import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-[#D2691E]/30 text-[#D2691E] font-medium text-sm mb-6">
                            Our Philosophy
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-8 leading-tight">
                            Lebih dari Sekadar <br />
                            <span className="italic font-serif text-[#8B4513]">Tempat Ngopi.</span>
                        </h2>
                        <p className="text-[#5D4037] mb-6 text-lg leading-relaxed">
                            Kami percaya bahwa "nongkrong" adalah kultur produktif. Di KopiNongki, kami mendesain ruang untuk ide-ide besar yang lahir dari percakapan santai.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Biji kopi 100% Arabika lokal grade A",
                                "Space ergonomis untuk WFC (Work From Cafe)",
                                "Barista ramah yang paham seleramu"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#8B4513]" />
                                    <span className="text-[#2C1810] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-8 border-t border-gray-100 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-[#2C1810]">50+</div>
                                <div className="text-sm text-gray-500">Menu Variants</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#2C1810]">15k+</div>
                                <div className="text-sm text-gray-500">Happy Faces</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#2C1810]">4.9</div>
                                <div className="text-sm text-gray-500">Avg Rating</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Barista brewing coffee manual brew"
                                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-[#D2691E] rounded-[2.5rem] -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
