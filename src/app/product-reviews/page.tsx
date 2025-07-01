

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";
//streaming
export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Product Details</p>}>
        <Product />
      </Suspense>

      <Suspense fallback={<p>Loading Reviews....</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
