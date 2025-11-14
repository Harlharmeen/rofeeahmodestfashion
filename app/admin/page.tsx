export default function AdminHomePage() {
  return (
    <section className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-primary">
        Dashboard Overview
      </h1>

      <p className="text-muted-foreground">
        Welcome to your control center — manage products, courses,
        orders, shout-outs, and brand settings from here.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white shadow-sm rounded-xl p-4 text-center">
          <h3 className="text-lg font-semibold text-[#6B4226]">
            Total Products
          </h3>
          <p className="text-2xl font-bold text-[#D4A5A5]">42</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4 text-center">
          <h3 className="text-lg font-semibold text-[#6B4226]">
            Orders This Week
          </h3>
          <p className="text-2xl font-bold text-[#D4A5A5]">18</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4 text-center">
          <h3 className="text-lg font-semibold text-[#6B4226]">
            New Shout-Outs
          </h3>
          <p className="text-2xl font-bold text-[#D4A5A5]">5</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4 text-center">
          <h3 className="text-lg font-semibold text-[#6B4226]">
            Courses Enrolled
          </h3>
          <p className="text-2xl font-bold text-[#D4A5A5]">12</p>
        </div>
      </div>
    </section>
  );
}
