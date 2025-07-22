import RegisterForm from "@/components/auth/RegisterForm";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionHero from "@/components/ui/section-hero/SectionHero";
import heroImage from "/public/images/image-2.png";

export default function LoginPage() {
  return (
    <>
      <SectionHero image={heroImage} title="Register" />
      <section className="container py-24">
        <Card hoverShadow={false} className="mx-auto max-w-md">
          <SectionHeading title="Welcome Home" subTitle="Sign In to Your Account." />
          <RegisterForm />
        </Card>
      </section>
    </>
  );
}
