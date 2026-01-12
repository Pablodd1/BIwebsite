import Stylish_H2 from "@My_UIstylish_h2";

export default function ReviewsSection({ reviews }) {
    return (
        <section className="mt-24">
            <Stylish_H2 h2={"Reviews"} />


            {reviews?.map((review, index) => (
                <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 "
                >
                    <div className="w-16 h-16 border flex items-center justify-center text-sm">
                        {review.name.charAt(0)}
                        {review.name.split(" ")[1]?.charAt(0)}
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <span className="font-medium text-sm">{review.name}</span>
                            <span className="text-xs text-gray-500">{review.date}</span>
                        </div>

                        <div className="text-sm mb-3">
                            {"★".repeat(review.rating)}
                            {"☆".repeat(5 - review.rating)}
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                            {review.text}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
