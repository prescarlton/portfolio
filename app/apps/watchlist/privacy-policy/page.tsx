export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Watchlist Privacy Policy</h1>
        <h2>Effective Date: 12/18/2024</h2>
      </div>
      <p>
        {
          "Thank you for using Watchlist! Your privacy is important to us. This Privacy Policy explains what data we collect, how we use it, and how we keep it safe."
        }
      </p>
      <div>
        <h2 className="text-xl font-bold">What data do we collect?</h2>
        <p>
          We only collect the following information, which is stored entirely on
          your device:
        </p>
        <ul className="list-disc mt-2 pl-8">
          <li>The movies you have marked as watched</li>
          <li>Your preferences for movies (like or dislike).</li>
        </ul>
        <p className="mt-2">
          We do not collect or store any personal information such as your name,
          email address, or location.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold">How We Use Your Data</h2>
        <p>
          We do not. All data is stored locally on your device so we have no
          data to use.{" "}
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold">Data Security</h2>
        <p>
          Because all data is stored locally on your device, you maintain full
          control over your information. We do not have any access to your data.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold">Third-Party Services</h2>
        <p>
          All movie data is retrieved from the TMDB API. This application uses
          TMDB and the TMDB APIs but is not endorsed, certified, or otherwise
          approved by TMDB.
        </p>
        <p>
          We do not share your data with any third-party services or
          advertisers.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold">Changes to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page, and the "Effective Date" will be updated
          accordingly.
        </p>
      </div>
    </div>
  )
}
