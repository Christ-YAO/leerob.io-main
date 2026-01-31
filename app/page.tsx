import Link from 'next/link';
import Image from 'next/image';
import avatar from 'app/avatar.jpg';
import { PreloadResources } from 'app/preload';
import { CustomIcon } from 'app/components/CustomIcon';
import smashing from 'public/images/home/smashing.jpg';
import summit from 'public/images/home/summit.jpg';
import reactathon from 'public/images/home/reactathon.jpg';
import ship from 'public/images/home/ship.jpg';
import filming from 'public/images/home/filming.jpg';
import meetups from 'public/images/home/meetups.jpg';

function Badge(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
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
    <div className="group flex w-full">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
            {icon}
          </div>
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {label}
          </p>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
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
    <div className="group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          {description && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1">
              {description}
            </p>
          )}
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

const LINKEDIN_URL =
  'https://www.linkedin.com/in/france-stanislas-bantantoula-koudissa-30245b254';
// Remplacer par ton adresse Gmail réelle
const GMAIL_MAILTO = 'mailto:ton-email@gmail.com';

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Bonjour, je suis France Stanislas 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        DevOps Junior orienté <strong>CI/CD</strong> et automatisation. Je suis
        actuellement stagiaire DevOps chez{' '}
        <span className="not-prose">
          <Badge href="https://www.linkedin.com/company/boxafrica">
            Box Africa
          </Badge>
        </span>{' '}
        à Abidjan (Côte d&apos;Ivoire), où je participe à la mise en place de
        pipelines <strong>GitLab CI/CD</strong>, à la conteneurisation avec{' '}
        <Badge href="https://www.docker.com">Docker</Badge>, et au renforcement
        de mes compétences sur <strong>Linux</strong> et l&apos;administration
        système.
      </p>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt=""
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt=""
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt=""
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt=""
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt=""
            src={meetups}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt=""
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="my-8 flex flex-col items-center gap-6 sm:flex-row">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-700">
          <Image
            alt="France Stanislas Bantan Toula Koudissa"
            src={avatar}
            fill
            sizes="128px"
            priority
            className="object-cover"
          />
        </div>
        <div className="prose prose-neutral dark:prose-invert flex-1">
          <p>
            Plus d&apos;un an d&apos;expérience en support IT et DevOps :
            GitLab, Git, Docker, Linux, AWS (EC2, S3, CloudWatch, Lambda, SQS,
            DynamoDB), Active Directory, Windows Server. Certifications Cisco
            (Linux, Cybersecurity, Python), NDG Linux, Windows Server.
          </p>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Tu peux me retrouver sur LinkedIn pour mon parcours détaillé et me
          contacter par email pour toute collaboration ou opportunité.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col gap-4 sm:flex-row">
        <SocialLink
          href={LINKEDIN_URL}
          label="LinkedIn"
          icon={<CustomIcon name="linkedin" size={24} className="text-[#0A66C2]" />}
        />
        <SocialLink
          href={GMAIL_MAILTO}
          label="Gmail / Email"
          icon={<CustomIcon name="gmail" size={24} className="text-red-600" />}
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl tracking-tighter mt-10 mb-4">
          Projets
        </h2>
        <p>
          Quelques projets et labs réalisés dans le cadre de ma formation
          DevOps et de ma préparation aux certifications (KCNA, AWS).
        </p>
      </div>
      <div className="my-6 flex w-full flex-col space-y-4">
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
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl tracking-tighter mt-10 mb-4">
          Stack & outils
        </h2>
        <p>
          Au quotidien : GitLab CI/CD, Docker, Git, Linux. Expérience avec AWS
          (EC2, S3, Lambda, CloudWatch, IAM, SQS, DynamoDB), Windows Server,
          Active Directory, Microsoft 365 Defender.
        </p>
      </div>
      <div className="my-6 flex h-14 w-full flex-row flex-wrap gap-2">
        {[
          { name: 'Docker', href: 'https://www.docker.com' },
          { name: 'GitLab', href: 'https://about.gitlab.com' },
          { name: 'AWS', href: 'https://aws.amazon.com' },
          { name: 'Linux', href: 'https://www.linux.org' },
        ].map(({ name, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
          >
            {name}
          </a>
        ))}
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Pour le détail de mon parcours (Box Africa, Muezy, PRESF, Kenaya
          Finances, SOPECO…) et mes certifications, voir ma page{' '}
          <Link href="/work">Expérience</Link> ou mon{' '}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            profil LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
}
