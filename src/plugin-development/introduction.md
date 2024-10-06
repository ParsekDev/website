<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://github.com/duruer.png',
    name: 'Ahmet Enes Duruer',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/duruer' },
    ]
  },
  {
    avatar: 'https://github.com/berkaltiok.png',
    name: 'Berk Altıok',
    title: 'Random Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/berkaltiok' },
      { icon: 'twitter', link: 'https://twitter.com/altiokberk' }
    ]
  }
];

const learningPaths = [
  {
    title: "Try the Tutorial",
    text: "For individuals who would rather learn by doing."
  },
  {
    title: "Check out the Examples",
    text: "Discover common examples of core features and official plugins available for Parsek."
  }
]
</script>

# What is Parsek?
Parsek is a core platform designed for back-end applications, allowing developers to focus on their projects without worrying about speed optimizations, best practices, or scalability.

By offering reusable plugins and rapid development tools, Parsek eliminates the need to write the same feature code for each project, ensuring faster, more efficient development while maintaining high performance.

## Philosophy

### Where it came from?
The name "Parsek" is inspired by "parcels" reflecting its modular nature. Just like parcels, Parsek is designed to break down functionality into reusable, interchangeable modules, making it easy to extend and adapt for different back-end applications.

### Why it exists? (Parsek)
Parsek was created to address the common challenges of traditional back-end development, where repetitive features, declining performance, and maintenance difficulties become issues over time. It also aims to overcome the limitations of other back-end frameworks by offering a modular, high-performance, and easily maintainable solution.

## Highlighted Features
* **Vert.X-based**
> Powered by the Vert.X reactive library for high-performance.
* **Kotlin-first**
> Fully developed in Kotlin, with seamless Java compatibility
* **Modular architecture**
> Supports reusable plugins across projects
* **Speed optimized**
> Fast startups and API responses with Vert.X
* **Efficient development**
> Leverage existing plugins or quickly create new ones
* **Monolithic approach**
> Simplified development with an all-in-one structure
* **Cross-platform**
> Runs anywhere with JVM (ARM, Windows, Linux, macOS)
* **Security-focused**
> Built with security in mind, so you don't need to worry about vulnerabilities
* **Scalable**
> Designed with scalability in mind to handle growing demands easily
* **Low Footprint & Efficient**
> Requires only a single CPU core and less than 500MB RAM, thanks to Vert.X.

## Pick Your Learning Path
<LearningPaths size="small" :learningPaths="learningPaths" />

## Our Team
Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
