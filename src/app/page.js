import { LanguageProvider } from "./LanguageContext";
import Portfolio from "./Portfolio";

export default function Page() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
