import React from 'react';

export default function DealOrdersPage() {
  return (
    <div>
      <h2 className="font-black text-4xl text-[#1D204C]">Deal Orders</h2>

      <div className="flex gap-4 justify-end items-center mt-5">
        <p>Filter :</p>
        <select className="select select-ghost w-fit">
          <option disabled selected>
            Category
          </option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-5">
        {[1, 2, 3, 4, 5, 6, , 7].map((_, i) => {
          return (
            <div className="p-10 bg-white text-[#1D204C]">
              <h3 className="font-black text-lg">Pencuci Piring</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                repellat ab commodi itaque id quidem voluptatum consequatur
                similique! Numquam veritatis reiciendis a vero eligendi
                consectetur autem quidem nisi dolor fugit!
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
