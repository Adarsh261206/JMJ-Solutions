import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { BLOG_POSTS } from '../../../utils/constants';

export default function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          title="Our Latest Blog"
          subtitle="Checkout our blog articles and product updates — expert insights on security, surveillance, and safety solutions."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.slice(0, 4).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.05}>
              <Link
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 ring-1 ring-black/5 hover:ring-accent/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block"
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
                    <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
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
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-lg text-white bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 active:scale-[0.98]"
          >
            View All Articles <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
