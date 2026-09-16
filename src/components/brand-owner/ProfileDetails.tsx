const profileDetails = [
  {
    label: "Full Name",
    value: "Your Name",
  },
  {
    label: "Email Address",
    value: "your@email.com",
  },
  {
    label: "Phone Number",
    value: "+91 XXXXX XXXXX",
  },
];

export default function ProfileDetails() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
        <div className="border-b border-black/10 pb-6">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Personal Information
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#102f3a]/55">
            Your personal details associated with your T-Adda account.
          </p>
        </div>

        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {profileDetails.map((detail) => (
            <div key={detail.label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                {detail.label}
              </p>

              <p className="mt-2 text-sm font-medium text-[#102f3a]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-black/10 pt-6">
          <button
            type="button"
            className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A]"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Security */}
      <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
        <div className="border-b border-black/10 pb-6">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Account Security
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#102f3a]/55">
            Manage your account password and security settings.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
            Password
          </p>

          <p className="mt-2 text-sm font-medium tracking-widest text-[#102f3a]">
            ••••••••
          </p>
        </div>

        <div className="mt-6">
          <button
            type="button"
            className="rounded-lg border border-[#102f3a]/15 px-5 py-3 text-sm font-semibold text-[#102f3a] transition hover:bg-[#fff4f5]"
          >
            Change Password
          </button>
        </div>
      </div>
    </section>
  );
}