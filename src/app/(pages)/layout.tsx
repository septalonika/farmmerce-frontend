import FooterPage from "@/components/organisms/layouts/footer";
import Header from "@/components/organisms/layouts/header";

export default function PageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Header />
      <div>{children}</div>
      <FooterPage />
    </section>
  );
}
