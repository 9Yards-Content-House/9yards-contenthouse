import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/shared/SEO";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Clock, BookOpen, Share2 } from "lucide-react";

export default function ThankYouContact() {
  return (
    <Layout>
      <SEO 
        title="Thank You | 9Yards Content House"
        description="Thank you for contacting 9Yards Content House. We'll respond within 2 hours during business hours."
        noIndex={true}
      />
      <section className="min-h-[80vh] flex items-center py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-display-3 md:text-display-2 mb-4 animate-fade-in-up">
              Thank You for Reaching Out!
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              We've received your message and will respond within{" "}
              <strong>2 hours</strong> during business hours.
            </p>

            {/* What happens next */}
            <div className="bg-muted rounded-xl p-8 mb-8 text-left">
              <h2 className="text-heading-2 mb-6 text-center">
                What Happens Next?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Review",
                    desc: "Our team reviews your project details",
                  },
                  {
                    step: "2",
                    title: "Response",
                    desc: "We'll reach out via email or phone",
                  },
                  {
                    step: "3",
                    title: "Consultation",
                    desc: "Schedule a free discovery call",
                  },
                  {
                    step: "4",
                    title: "Proposal",
                    desc: "Receive a tailored project proposal",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-muted-foreground"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <p className="text-muted-foreground mb-4">
              While you wait, why not explore:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button variant="outline" asChild>
                <Link to="/portfolio">
                  <BookOpen className="w-4 h-4" />
                  Browse Portfolio
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <Clock className="w-4 h-4" />
                  Read Our Blog
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services">
                  <Share2 className="w-4 h-4" />
                  Learn About Services
                </Link>
              </Button>
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link to="/">
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
