import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, QrCode } from 'lucide-react';

const Membership = () => {
    return (
        <section className="py-24 bg-[#EBE9E4] relative overflow-hidden">
            {/* Subtle Gradient Spots */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D2691E]/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B4513]/10 bg-white/30 text-[#8B4513] text-xs font-bold uppercase tracking-wider mb-8">
                        <Crown size={14} className="fill-current" /> Priority Status
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-8 leading-[1.1]">
                        Join the <br />
                        <span className="text-[#8B4513]">Inner Circle.</span>
                    </h2>
                    <p className="text-[#5D4037] text-lg mb-10 leading-relaxed max-w-md">
                        Seamless payments, exclusive tasting events, and rewards that matter. Designed for the daily connoisseur.
                    </p>

                    <ul className="space-y-5 mb-12">
                        {[
                            "10% Cashback on every transaction",
                            "Priority table reservation",
                            "Complimentary single-origin on birthday"
                        ].map((perk, i) => (
                            <li key={i} className="flex items-center gap-4 text-[#2C1810] font-medium">
                                <div className="w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center text-white shrink-0">
                                    <Sparkles size={12} fill="currentColor" />
                                </div>
                                {perk}
                            </li>
                        ))}
                    </ul>

                    <button className="bg-[#2C1810] text-white px-10 py-5 rounded-full font-bold hover:bg-[#8B4513] hover:scale-105 transition-all shadow-xl shadow-[#2C1810]/20">
                        Apply for Membership
                    </button>
                </motion.div>

                {/* Visual Card - Clean & Premium */}
                <motion.div
                    initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="w-full lg:w-1/2 perspective-1000"
                >
                    <div className="relative w-full max-w-md mx-auto aspect-[1.58] rounded-3xl overflow-hidden bg-[#2C1810] shadow-2xl shadow-[#2C1810]/30 transition-all duration-500 hover:shadow-3xl hover:translate-y-[-10px]">

                        {/* Card Texture */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810] to-black opacity-90"></div>
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

                        {/* Card Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[#D2691E] rounded-full"></div>
                                    <div className="text-xl font-bold text-white tracking-widest uppercase">KopiNongki</div>
                                </div>
                                <QrCode className="text-white/80 w-12 h-12" />
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-8 bg-[#FFE5B4] rounded-md opacity-20"></div>
                                <div className="text-white/60 font-mono text-lg tracking-widest pt-1">•••• •••• •••• 1029</div>
                            </div>

                            <div className="flex justify-between items-end border-t border-white/10 pt-6">
                                <div>
                                    <div className="text-white/40 text-[10px] tracking-widest uppercase mb-1">MEMBER NAME</div>
                                    <div className="text-white font-bold tracking-wide">MUHAMMAD RAFI</div>
                                </div>
                                <div className="text-[#D2691E] font-bold text-sm tracking-widest">PLATINUM</div>
                            </div>
                        </div>

                        {/* Glass/Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 skew-x-12 translate-x-[-150%] hover:translate-x-[150%] transition-transform duration-1000"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Membership;
