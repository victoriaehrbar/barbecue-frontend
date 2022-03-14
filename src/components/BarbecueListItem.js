import React from "react";

export default function BarbecueListItem({ barbecue }) {
  return (
    <div>
      {barbecue.name} - {barbecue.rating} - {barbecue.review}
    </div>
  );
}