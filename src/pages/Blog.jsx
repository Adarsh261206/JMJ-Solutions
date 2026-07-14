import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, Shield } from 'lucide-react';
import SEO from '../components/shared/SEO';
import ScrollReveal from '../components/shared/ScrollReveal';
import { BLOG_POSTS } from '../utils/constants';

export default function Blog() {
  return (
    <>
      <SEO title="Blog - Security Tips & Insights" />

      <section className="relative bg-primary-dark py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-2.jpg" alt="Security surveillance blog — JMJ Solutions CCTV and security insights Mumbai" width={1920} height={1282} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        </div>
        <div className="container-page relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-accent-light" />
              <span className="text-white/80 text-sm font-medium">Security Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Expert insights, tips, and guides on security and surveillance solutions
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.05}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl block"
                >
                  <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={533}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:text-accent-light transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
