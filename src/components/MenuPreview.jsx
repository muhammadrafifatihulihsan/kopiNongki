import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Plus } from "lucide-react";
//gambar
import caramel from "../assets/caramel.jpg";
import matchalatte from "../assets/matchalatte.jpg";

const products = [
	{
		name: "Cappuccino Special",
		price: "28K",
		rating: "5.0",
		image:
			"https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		tag: "Best Seller",
	},
	{
		name: "V60 Single Origin",
		price: "32K",
		rating: "4.9",
		image:
			"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		tag: "Specialty",
	},
	{
		name: "Caramel Macchiato",
		price: "35K",
		rating: "5.0",
		image: caramel,
		tag: "Sweet",
	},
	{
		name: "Cold Brew Signature",
		price: "30K",
		rating: "4.8",
		image:
			"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		tag: "Refresh",
	},
	{
		name: "Matcha Latte",
		price: "29K",
		rating: "4.9",
		image: matchalatte,
		tag: "Non-Coffee",
	},
	{
		name: "Croissant Almond",
		price: "25K",
		rating: "5.0",
		image:
			"https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		tag: "Pastry",
	},
];

const MenuPreview = () => {
	return (
		<section id="menu" className="py-24 bg-[#FAF9F6]">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div className="max-w-xl">
						<h2 className="text-4xl font-bold text-[#2C1810] mb-4">
							Curated Favorites
						</h2>
						<p className="text-[#5D4037] text-lg">
							Menu andalan yang diracik untuk menemani setiap cerita dan
							kesibukanmu.
						</p>
					</div>
					<button className="hidden md:flex items-center gap-2 text-[#8B4513] font-semibold hover:gap-4 transition-all">
						Full Menu <ArrowRight className="w-5 h-5" />
					</button>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							viewport={{ once: true }}
							className="group relative bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
						>
							<div className="relative h-64 overflow-hidden rounded-2xl mb-4 bg-gray-100">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#2C1810] shadow-sm">
									{product.tag}
								</div>
								<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md py-1 px-2 rounded-full flex items-center gap-1 shadow-sm">
									<Star className="w-3 h-3 text-[#FFB74D] fill-current" />
									<span className="text-xs font-bold text-[#2C1810]">
										{product.rating}
									</span>
								</div>
							</div>

							<div className="px-2 pb-2">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold text-[#2C1810] group-hover:text-[#8B4513] transition-colors">
										{product.name}
									</h3>
									<span className="text-lg font-bold text-[#8B4513]">
										{product.price}
									</span>
								</div>

								<div className="flex items-center justify-between mt-4">
									<span className="text-sm text-gray-400">Add to order</span>
									<button className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#2C1810] group-hover:bg-[#2C1810] group-hover:text-white transition-colors duration-300">
										<Plus className="w-5 h-5" />
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div className="text-center mt-12 md:hidden">
					<button className="btn-primary w-full py-4 rounded-xl font-bold">
						See All Menu
					</button>
				</div>
			</div>
		</section>
	);
};

export default MenuPreview;
