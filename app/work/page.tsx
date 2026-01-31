import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expérience',
  description:
    'Parcours professionnel de France Stanislas : DevOps, IT Support, Box Africa, Abidjan.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Mon expérience
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Plus d&apos;un an et demi d&apos;expérience en support IT et DevOps,
          entre Abidjan (Côte d&apos;Ivoire) et Brazzaville (République du
          Congo). Résumé de mon parcours.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Box Africa — Stagiaire DevOps
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Oct. 2025 — Aujourd&apos;hui · Abidjan, Côte d&apos;Ivoire
        </p>
        <p>
          Intégré à l&apos;équipe DevOps de{' '}
          <a
            href="https://www.linkedin.com/company/boxafrica"
            target="_blank"
            rel="noopener noreferrer"
          >
            Box Africa
          </a>
          , je participe à la mise en place et à l&apos;automatisation de
          processus CI/CD avec GitLab, et je consolide mes compétences en
          gestion de code source, virtualisation et conteneurisation.
        </p>
        <ul>
          <li>
            Déploiement et gestion de pipelines <strong>GitLab CI/CD</strong> pour
            des projets internes.
          </li>
          <li>
            Utilisation de <strong>Git</strong> pour le travail collaboratif.
          </li>
          <li>
            Utilisation de <strong>Docker</strong> pour la création et la
            gestion de conteneurs applicatifs.
          </li>
          <li>
            Renforcement des compétences sur <strong>Linux</strong> et
            l&apos;administration système dans un contexte DevOps.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Box Africa — IT Support Specialist
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Mar. 2025 — Sep. 2025 · Abidjan (mission Société Générale Côte
          d&apos;Ivoire)
        </p>
        <p>
          Stagiaire IT Support au siège de la SGCI : installation et
          configuration des postes, dépannage matériel/logiciel/réseau, gestion
          des tickets via <strong>Easy Vista</strong>, administration{' '}
          <strong>Active Directory</strong>, Cisco IP Communicator, BitLocker,
          certificats de sécurité.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Muezy — Informaticien
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Nov. 2023 — Déc. 2023 · Brazzaville, République du Congo
        </p>
        <p>
          Installation, configuration et maintenance des postes, administration
          des messageries (LWS), gestion des licences Kaspersky (MyKaspersky),
          assistance technique, Active Directory.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          PRESF SA & Kenaya Finances — Informaticien
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fév. 2023 — Jul. 2023 · Brazzaville
        </p>
        <p>
          Gestion des mails professionnels (LWS, IONOS), plateformes Western
          Union / Money Gram / Ria, assistance technique, développement
          d&apos;une application de gestion du personnel, maintenance
          d&apos;applications et bases de données.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          SOPECO Congo — Analyste Programmeur
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Jan. 2022 — Mar. 2022 · Brazzaville
        </p>
        <p>
          Analyse des besoins, développement de fonctionnalités, conception
          d&apos;un système de billetterie.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Formation & certifications
        </h2>
        <p>
          <strong>PIGIER Côte d&apos;Ivoire</strong> (2023–2024). Certifications
          : NDG Linux Essentials, NDG Linux, Windows Server (Udemy), Gestion
          des cybermenaces, Computer Hardware Basics, Operating Systems Basics,
          Python Essentials 1, Introduction to IoT, Introduction to
          Cybersecurity (Cisco), CompTIA A+ (Alison).
        </p>
      </div>
    </section>
  );
}
