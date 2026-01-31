import Link from 'next/link';
import Image from 'next/image';
import avatar from 'public/images/France_.jpg';
import { CustomIcon } from 'app/components/CustomIcon';
import { WaveEmoji } from 'app/components/WaveEmoji';
import { cn } from '@/lib/utils';
import smashing from 'public/images/home/smashing.jpg';
import summit from 'public/images/home/summit.jpg';
import reactathon from 'public/images/home/reactathon.jpg';
import ship from 'public/images/home/ship.jpg';
import filming from 'public/images/home/filming.jpg';
import meetups from 'public/images/home/meetups.jpg';

const LINKEDIN_URL =
  'https://www.linkedin.com/in/france-stanislas-bantantoula-koudissa-30245b254';
const GMAIL_MAILTO = 'mailto:ton-email@gmail.com';

function Badge({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1 rounded-md border border-neutral-700 bg-neutral-800/80 px-2.5 py-0.5 text-sm text-neutral-300 no-underline transition-colors hover:border-neutral-600 hover:bg-neutral-800 hover:text-white',
        className
      )}
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/80"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/80">
          {icon}
        </div>
        <span className="font-medium text-neutral-200">{label}</span>
      </div>
      <div className="text-neutral-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

function ProjectLink({
  name,
  href,
  description,
}: {
  name: string;
  href: string;
  description?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/80"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="font-medium text-neutral-100 group-hover:text-white">
            {name}
          </p>
          {description && (
            <p className="mt-1 line-clamp-1 text-sm text-neutral-400">
              {description}
            </p>
          )}
        </div>
        <div className="shrink-0 text-neutral-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:text-neutral-400">
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        <div className="shrink-0">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-neutral-700 ring-2 ring-neutral-800 ring-offset-2 ring-offset-[#111010] sm:h-36 sm:w-36">
            <Image
              alt="France Stanislas BANTANTOULA KOUDISSA"
              src={avatar}
              fill
              sizes="144px"
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1 space-y-4">
          <div>
            <h1 className="text-2xl font-medium tracking-tighter text-white sm:text-3xl">
              Hello, je suis France Stanislas <WaveEmoji />
            </h1>
            <p className="mt-2 text-neutral-400">
              DevOps Junior · CI/CD & automatisation · Abidjan (Côte d&apos;Ivoire)
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            Stagiaire DevOps chez{' '}
            <Badge href="https://www.box.africa/">
              <CustomIcon name="boxafrica" size={14} className="shrink-0" />
              Box Africa
            </Badge>
            , je participe à la mise en place de pipelines{' '}
            <strong className="text-neutral-200">GitLab CI/CD</strong>, à la
            conteneurisation avec{' '}
            <Badge href="https://www.docker.com">
              <CustomIcon name="docker" size={14} className="shrink-0" />
              Docker
            </Badge>
            , et au renforcement de mes compétences sur{' '}
            <strong className="text-neutral-200 inline-flex items-center gap-1">
              <CustomIcon name="linux" size={14} className="shrink-0" />
              Linux
            </strong>{' '}
            et
            l&apos;administration système.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <SocialLink
          href={LINKEDIN_URL}
          label="LinkedIn"
          icon={
            <CustomIcon
              name="linkedin"
              size={24}
              className="text-[#0A66C2]"
            />
          }
        />
        <SocialLink
          href={GMAIL_MAILTO}
          label="Email"
          icon={<CustomIcon name="gmail" size={24} className="text-red-500" />}
        />
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 grid-rows-4 gap-3 sm:grid-rows-3 sm:grid-cols-3 sm:gap-4">
        <div className="relative h-36 overflow-hidden rounded-xl sm:h-40">
          <Image
            alt=""
            src={summit}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            priority
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative row-span-2 overflow-hidden rounded-xl">
          <Image
            alt=""
            src={reactathon}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            priority
            className="object-cover object-top transition-transform duration-300 hover:scale-105 sm:object-center"
          />
        </div>
        <div className="relative h-36 overflow-hidden rounded-xl sm:h-40">
          <Image
            alt=""
            src={ship}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            priority
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative row-span-2 overflow-hidden rounded-xl">
          <Image
            alt=""
            src={filming}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            priority
            className="object-cover transition-transform duration-300 hover:scale-105 sm:object-center"
          />
        </div>
        <div className="relative row-span-2 overflow-hidden rounded-xl">
          <Image
            alt=""
            src={meetups}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            priority
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative h-36 overflow-hidden rounded-xl sm:h-40">
          <Image
            alt=""
            src={smashing}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            priority
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* About */}
      <div className="rounded-xl border-neutral-800 bg-neutral-900/50">
        <h2 className="font-medium text-lg tracking-tighter text-white">
          En bref
        </h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Plus d&apos;un an et demi d&apos;expérience en support IT et DevOps :
          GitLab, Git, Docker, Linux, AWS (EC2, S3, CloudWatch, Lambda, SQS,
          DynamoDB), Active Directory, Windows Server. Certifications Cisco
          (Linux, Cybersecurity, Python), NDG Linux, Windows Server.
        </p>
        <Link
          href="/work"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
        >
          Voir mon parcours complet
          <ArrowIcon />
        </Link>
      </div>

      {/* Projects */}
      <div>
        <h2 className="font-medium text-xl tracking-tighter text-white">
          Projets
        </h2>
        <p className="mt-2 text-neutral-400">
          Labs et projets réalisés dans le cadre de ma formation DevOps.
        </p>
        <div className="mt-4 space-y-3">
          <ProjectLink
            name="Simulateur KCNA (Kubernetes and Cloud Native Associate)"
            href={LINKEDIN_URL}
            description="60 questions, Docker, GitLab CI/CD, Tailwind, mode sombre"
          />
          <ProjectLink
            name="Site statique sur AWS S3 + CloudFront"
            href={LINKEDIN_URL}
            description="OAI, HTTPS, sécurisation du bucket"
          />
          <ProjectLink
            name="Alerte CPU avec EC2, CloudWatch, SNS"
            href={LINKEDIN_URL}
            description="Lab AWS, supervision et alerting"
          />
          <ProjectLink
            name="File d'attente serverless (SQS, Lambda, DynamoDB)"
            href={LINKEDIN_URL}
            description="Architecture scalable et tolérante aux pannes"
          />
        </div>
      </div>

      {/* Stack */}
      <div>
        <h2 className="font-medium text-xl tracking-tighter text-white">
          Stack & outils
        </h2>
        <p className="mt-2 text-neutral-400">
          GitLab CI/CD, Docker, Git, Linux, AWS (EC2, S3, Lambda, CloudWatch,
          IAM, SQS, DynamoDB), Windows Server, Active Directory.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            {
              name: 'Docker',
              icon: 'docker' as const,
              href: 'https://www.docker.com',
            },
            {
              name: 'GitLab',
              icon: 'gitlab' as const,
              href: 'https://about.gitlab.com',
            },
            { name: 'AWS', icon: 'aws' as const, href: 'https://aws.amazon.com' },
            {
              name: 'Linux',
              icon: 'linux' as const,
              href: 'https://www.linux.org',
            },
          ].map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/80 px-3 py-2 text-sm text-neutral-300 no-underline transition-colors hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
            >
              <CustomIcon name={icon} size={18} />
              {name}
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 text-center">
        <p className="text-neutral-400">
          Pour le détail de mon parcours et mes certifications, voir ma page{' '}
          <Link
            href="/work"
            className="font-medium text-neutral-200 underline underline-offset-2 transition-colors hover:text-white"
          >
            Expérience
          </Link>
          {' · '}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-200 underline underline-offset-2 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
