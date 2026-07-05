import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import SEO from '../components/shared/SEO';
import ScrollReveal from '../components/shared/ScrollReveal';
import Button from '../components/shared/Button';
import { BLOG_POSTS } from '../utils/constants';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-text-secondary mb-8">The article you're looking for doesn't exist.</p>
          <Button to="/blog">Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />

      <section className="relative bg-primary-dark py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        </div>
        <div className="container-page relative z-10">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-4">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-1"><Tag className="w-4 h-4" />{post.tags.join(', ')}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-white/80 max-w-3xl">{post.excerpt}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: post.content }} />
            </ScrollReveal>

            <ScrollReveal className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-secondary">Tags:</span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button to="/contact" variant="primary">Get Free Quote</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
