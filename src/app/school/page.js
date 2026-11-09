import { LanguageProvider } from "../LanguageContext";
import School from "../School";

export const metadata = {
  title: "School · Spotify playlists · Seppe Rennen",
  description: "Open the playlists on your phone and save them to your own Spotify.",
};

export default function SchoolPage() {
  return (
    <LanguageProvider>
      <School />
    </LanguageProvider>
  );
}
