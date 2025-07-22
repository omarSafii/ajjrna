import LoginForm from "@/components/auth/LoginForm";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionHero from "@/components/ui/section-hero/SectionHero";
import heroImage from "/public/images/image-2.png";

export default function LoginPage() {
  return (
    <>
      <SectionHero image={heroImage} title="Login" />
      <section className="container py-24">
        <Card hoverShadow={false} className="mx-auto max-w-md">
          <SectionHeading title="Welcome Home" subTitle="Sign In to Your Account." />
          <LoginForm />
        </Card>
      </section>
    </>
  );
}
