import type { Metadata } from 'next';
import Link from 'next/link';
import { CustomIcon } from 'app/components/CustomIcon';

const LINKEDIN_URL =
  'https://www.linkedin.com/in/france-stanislas-bantantoula-koudissa-30245b254';

const experiences = [
  {
    company: 'Box Africa',
    role: 'Stagiaire DevOps',
    period: "Oct. 2025 — Aujourd'hui",
    location: "Abidjan, Côte d'Ivoire",
    companyUrl: 'https://www.linkedin.com/company/boxafrica',
    description:
      "Intégré à l'équipe DevOps, je participe à la mise en place et à l'automatisation de processus CI/CD avec GitLab, et je consolide mes compétences en gestion de code source, virtualisation et conteneurisation.",
    highlights: [
      'Déploiement et gestion de pipelines GitLab CI/CD pour des projets internes',
      'Utilisation de Git pour le travail collaboratif',
      'Utilisation de Docker pour la création et la gestion de conteneurs applicatifs',
      'Renforcement des compétences sur Linux et l\'administration système',
    ],
    techs: ['docker', 'gitlab', 'linux'] as const,
  },
  {
    company: 'Box Africa',
    role: 'IT Support Specialist',
    period: 'Mar. 2025 — Sep. 2025',
    location: "Abidjan (mission Société Générale Côte d'Ivoire)",
    description:
      'Stagiaire IT Support au siège de la SGCI : installation et configuration des postes, dépannage matériel/logiciel/réseau, gestion des tickets, administration Active Directory.',
    highlights: [
      'Gestion des tickets via Easy Vista',
      'Administration Active Directory, Cisco IP Communicator, BitLocker',
      'Certificats de sécurité',
    ],
    techs: [] as const,
  },
  {
    company: 'Muezy',
    role: 'Informaticien',
    period: 'Nov. 2023 — Déc. 2023',
    location: 'Brazzaville, République du Congo',
    description:
      'Installation, configuration et maintenance des postes, administration des messageries, gestion des licences Kaspersky, assistance technique.',
    highlights: [
      'Administration des messageries (LWS)',
      'Gestion des licences Kaspersky (MyKaspersky)',
      'Assistance technique, Active Directory',
    ],
    techs: ['linux'] as const,
  },
  {
    company: 'PRESF SA & Kenaya Finances',
    role: 'Informaticien',
    period: 'Fév. 2023 — Jul. 2023',
    location: 'Brazzaville',
    description:
      'Gestion des mails professionnels, plateformes Western Union / Money Gram / Ria, assistance technique, développement d\'une application de gestion du personnel.',
    highlights: [
      'Gestion des mails (LWS, IONOS)',
      'Plateformes Western Union / Money Gram / Ria',
      'Maintenance d\'applications et bases de données',
    ],
    techs: [] as const,
  },
  {
    company: 'SOPECO Congo',
    role: 'Analyste Programmeur',
    period: 'Jan. 2022 — Mar. 2022',
    location: 'Brazzaville',
    description:
      "Analyse des besoins, développement de fonctionnalités, conception d'un système de billetterie.",
    highlights: [],
    techs: [] as const,
  },
];

const certifications = [
  'NDG Linux Essentials',
  'NDG Linux',
  'Windows Server',
  'Gestion des cybermenaces',
  'Computer Hardware Basics',
  'Operating Systems Basics',
  'Python Essentials 1',
  'Introduction to IoT',
  'Introduction to Cybersecurity (Cisco)',
  'CompTIA A+ (Alison)',
];

const techIcons: Record<string, 'docker' | 'gitlab' | 'linux' | 'aws'> = {
  docker: 'docker',
  gitlab: 'gitlab',
  linux: 'linux',
  aws: 'aws',
};

export const metadata: Metadata = {
  title: 'Expérience',
  description:
    'Parcours professionnel de France Stanislas : DevOps, IT Support, Box Africa, Abidjan.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter">
        Mon expérience
      </h1>
      <p className="text-neutral-400 text-sm mb-10 max-w-xl">
        Plus d&apos;un an et demi d&apos;expérience en support IT et DevOps,
        entre Abidjan (Côte d&apos;Ivoire) et Brazzaville (République du Congo).
      </p>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}-${exp.period}`}
            className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/80"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="font-medium text-lg tracking-tighter">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-300 transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                  <span className="text-neutral-500 font-normal">
                    {' — '}
                    {exp.role}
                  </span>
                </h2>
                <p className="text-neutral-500 text-sm mt-0.5">
                  {exp.period}
                  <span className="text-neutral-600"> · </span>
                  {exp.location}
                </p>
              </div>
              {exp.techs.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {exp.techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-800/80 px-2.5 py-1 text-xs text-neutral-300"
                    >
                      <CustomIcon
                        name={techIcons[tech]}
                        size={14}
                        className="shrink-0"
                      />
                      {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
              {exp.description}
            </p>
            {exp.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-neutral-400 before:content-['·'] before:text-neutral-600 before:font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
        <h2 className="font-medium text-lg tracking-tighter">
          Formation & certifications
        </h2>
        <p className="text-neutral-500 text-sm mt-1">
          PIGIER Côte d&apos;Ivoire (2023–2024)
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-md border border-neutral-700 bg-neutral-800/80 px-3 py-1.5 text-xs text-neutral-400"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-neutral-500">
        Pour plus de détails, consulter mon{' '}
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors"
        >
          profil LinkedIn
        </Link>
      </p>
    </section>
  );
}
