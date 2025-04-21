
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    categories: string[];
  };
  featured?: boolean;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, featured = false }) => {
  return (
    <Card 
      className={`bg-card border-border transition-all duration-300 hover:border-primary/50 ${
        featured ? 'md:col-span-2' : ''
      } card-hover`}
    >
      <CardHeader className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map(category => (
            <Badge key={category} variant="secondary" className="text-primary bg-secondary">
              {category}
            </Badge>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`} className="group">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center gap-4 text-sm text-foreground/60 mt-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-foreground/80">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button variant="ghost" asChild className="p-0 hover:bg-transparent hover:text-primary">
          <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
