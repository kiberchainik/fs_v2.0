import { slugify } from '../src/utils/slugify';
import { PrismaService } from '../src/prisma/prisma.service';

async function main() {
    const prisma = new PrismaService();

    async function createCategoryWithSubcategories(prisma, categoryData, subcategoriesData) {
        try {
            const category = await prisma.category.create({
                data: categoryData,
            });

            if (subcategoriesData && subcategoriesData.length > 0) {
                const subcategories = subcategoriesData.map(subcategory => ({
                    ...subcategory,
                    parentId: category.id,
                }));
                await prisma.category.createMany({
                    data: subcategories,
                });
            }

            console.log(`Category "${categoryData.name}" and its subcategories created successfully.`);
        } catch (error) {
            console.error(`Error creating category "${categoryData.name}":`, error);
        }
    }

    async function seedCategories(prisma: PrismaService) {
        const categories = [
            {
                categoryData: {
                    name: 'Information Technology',
                    slug: slugify('Information Technology'),
                    description: `L'Information Technology si occupa della gestione e dell'elaborazione dei dati attraverso tecnologie avanzate. Include lo sviluppo di software, la sicurezza informatica e l'infrastruttura tecnologica, fondamentale per il funzionamento di aziende e organizzazioni.`,
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Information',
                        slug: slugify('Information'),
                        description: `Soluzioni digitali e innovazioni tecnologiche per migliorare il lavoro e la vita quotidiana.`,
                        level: 2,
                    }, {
                        name: 'Developer',
                        slug: slugify('Developer'),
                        description: `Risorse e strumenti per sviluppatori: programmazione, framework e tecnologie all’avanguardia.`,
                        level: 2,
                    }, {
                        name: 'Help Desk',
                        slug: slugify('Help Desk'),
                        description: `Supporto tecnico per risolvere problemi IT, assistenza clienti e gestione dei servizi digitali per garantire l’efficienza aziendale`,
                        level: 2,
                    }, {
                        name: 'Tecnico Hardware',
                        slug: slugify('Tecnico Hardware'),
                        description: `Esperti nella manutenzione, riparazione e installazione di hardware, per assicurare prestazioni elevate a tutti i dispositivi aziendali`,
                        level: 2,
                    }, {
                        name: 'Web Specialist',
                        slug: slugify('Web Specialist'),
                        description: `Professionisti del web: sviluppo e ottimizzazione di siti e applicazioni per migliorare la presenza online e l’esperienza utente`,
                        level: 2,
                    }
                ],
            },
            {
                categoryData: {
                    name: 'Ingegneria',
                    slug: slugify('Ingegneria'),
                    description: 'Settore che si occupa della progettazione, costruzione e manutenzione di infrastrutture e sistemi tecnologici.',
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Aeronautico',
                        slug: slugify('Aeronautico'),
                        description: 'Progettazione e manutenzione di veicoli aerei, sicurezza e innovazione nel campo.',
                        level: 2,
                    }, {
                        name: 'Chimico',
                        slug: slugify('Chimico'),
                        description: 'Esperti nella produzione e sviluppo di prodotti chimici, con attenzione alla sicurezza, sostenibilità e innovazione.',
                        level: 2,
                    }, {
                        name: 'Civile',
                        slug: slugify('Civile'),
                        description: 'Progettazione e costruzione di infrastrutture, dalle strade agli edifici, con un approccio sostenibile e innovativo.',
                        level: 2,
                    }, {
                        name: 'Elettronico',
                        slug: slugify('Elettronico'),
                        description: 'Sviluppo e manutenzione di sistemi elettronici avanzati, per applicazioni industriali e commerciali.',
                        level: 2,
                    }, {
                        name: 'Elettrotecnico',
                        slug: slugify('Elettrotecnico'),
                        description: 'Specialisti in installazione e manutenzione di impianti elettrici, garantendo sicurezza e funzionalità.',
                        level: 2,
                    }, {
                        name: 'Gestionale',
                        slug: slugify('Gestionale'),
                        description: 'Organizzazione e ottimizzazione delle risorse aziendali, per migliorare processi e performance.',
                        level: 2,
                    }, {
                        name: 'Meccanico',
                        slug: slugify('Meccanico'),
                        description: 'Progettazione e costruzione di macchinari e componenti meccaniche per applicazioni industriali e ingegneristiche.',
                        level: 2,
                    }
                ],
            },
            {
                categoryData: {
                    name: 'Logistica',
                    slug: slugify('Logistica'),
                    description: 'Gestione e ottimizzazione delle risorse logistiche, per garantire flussi di lavoro efficienti e la puntualità delle consegne.',
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Autista',
                        slug: slugify('Autista'),
                        description: 'Servizi di trasporto efficiente e sicuro, per la consegna puntuale delle merci e la soddisfazione del cliente.',
                        level: 2,
                    }, {
                        name: 'Logistica e traslochi',
                        slug: slugify('Logistica e traslochi'),
                        description: 'Gestione e ottimizzazione delle risorse logistiche, per garantire flussi di lavoro efficienti e la puntualità delle consegne.',
                        level: 2,
                    }, {
                        name: 'Magazzino',
                        slug: slugify('Magazzino'),
                        description: 'Organizzazione e gestione dello stock, con soluzioni per mantenere l’efficienza e l’ordine nel magazzino.',
                        level: 2,
                    }
                ]
            },
            {
                categoryData: {
                    name: 'Marketing',
                    slug: slugify('Marketing'),
                    description: 'Strategie di marketing mirate per attrarre e fidelizzare i clienti, migliorando la visibilità e il valore del brand.',
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Comunicazione',
                        slug: slugify('Comunicazione'),
                        description: 'Strategie di comunicazione per promuovere il brand, migliorare le relazioni con il pubblico e aumentare la visibilità aziendale.',
                        level: 2,
                    }, {
                        name: 'Digital Marketing',
                        slug: slugify('Digital Marketing'),
                        description: 'Soluzioni digitali innovative per migliorare la presenza online, con strategie SEO, social media e campagne mirate.',
                        level: 2,
                    }, {
                        name: 'Grafica',
                        slug: slugify('Grafica'),
                        description: 'Creazione di contenuti visivi per una comunicazione efficace e di impatto, con attenzione al design e alla coerenza del brand.',
                        level: 2,
                    }, {
                        name: 'Commerciale',
                        slug: slugify('Commerciale'),
                        description: 'Strategie di marketing mirate per attrarre e fidelizzare i clienti, migliorando la visibilità e il valore del brand.',
                        level: 2,
                    }
                ]
            },
            {
                categoryData: {
                    name: 'Operai e Produzione',
                    slug: slugify('Operai e Produzione'),
                    description: 'Settore che si occupa della produzione e lavorazione di beni, con attenzione alla qualità e all’efficienza.',
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Agricoltura, Pesca, Allevamento',
                        slug: slugify('Agricoltura, Pesca, Allevamento'),
                        description: 'Sviluppo e gestione di attività agricole, ittiche e di allevamento, con soluzioni sostenibili e innovative.',
                        level: 2,
                    }, {
                        name: 'Alimentare',
                        slug: slugify('Alimentare'),
                        description: 'Produzione e trasformazione di alimenti, con attenzione alla qualità, sicurezza e sostenibilità dei prodotti.',
                        level: 2,
                    }, {
                        name: 'Cartotecnico',
                        slug: slugify('Cartotecnico'),
                        description: 'Processi di produzione per l’industria cartotecnica, con soluzioni avanzate per soddisfare le esigenze del mercato.',
                        level: 2,
                    }, {
                        name: 'Chimico (Produzione)',
                        slug: slugify('Chimico produzione'),
                        description: 'Lavorazione e gestione di prodotti chimici, assicurando sicurezza e innovazione nei processi produttivi.',
                        level: 2,
                    }, {
                        name: 'Generico',
                        slug: slugify('Generico'),
                        description: 'Personale operativo per vari settori di produzione, per garantire flessibilità ed efficienza nei processi.',
                        level: 2,
                    }, {
                        name: 'Metalmeccanico',
                        slug: slugify('Metalmeccanico'),
                        description: 'Lavorazione dei metalli e produzione di componenti meccaniche, con attenzione alla precisione e alla qualità.',
                        level: 2,
                    }, {
                        name: 'Tessile',
                        slug: slugify('Tessile'),
                        description: 'Produzione e lavorazione tessile, con focus su qualità, innovazione e sostenibilità dei materiali.',
                        level: 2,
                    }
                ]
            },
            {
                categoryData: {
                    name: 'Sales',
                    slug: slugify('Sales'),
                    description: 'Gestione delle vendite e delle relazioni con i clienti, per raggiungere gli obiettivi di mercato.',
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Agente',
                        slug: slugify('Agente'),
                        description: 'Venditori esperti nella gestione delle vendite, capaci di creare relazioni e raggiungere gli obiettivi di mercato.',
                        level: 2,
                    }, {
                        name: 'Vendita',
                        slug: slugify('Vendita'),
                        description: 'Soluzioni per il settore commerciale, dall’analisi di mercato alla gestione delle trattative con i clienti.',
                        level: 2,
                    }, {
                        name: 'Ufficio Acquisti',
                        slug: slugify('Ufficio Acquisti'),
                        description: 'Gestione degli acquisti e delle forniture aziendali, con strategie per ottimizzare i costi e migliorare le relazioni con i fornitori.',
                        level: 2,
                    }
                ]
            },
            {
                categoryData: {
                    name: 'Sanità',
                    slug: slugify('Sanità'),
                    description: 'Settore che si occupa della salute e del benessere dei pazienti, con servizi medici e assistenziali di alta qualità.',
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Farmacista',
                        slug: slugify('Farmacista'),
                        description: 'Specialisti nella distribuzione e consulenza sui farmaci, per garantire il benessere e la salute dei pazienti.',
                        level: 2,
                    }, {
                        name: 'Infermiere',
                        slug: slugify('Infermiere'),
                        description: 'Assistenza infermieristica professionale per supportare il recupero e il benessere dei pazienti.',
                        level: 2,
                    }, {
                        name: 'Informatore',
                        slug: slugify('Informatore'),
                        description: 'Professionisti nell\'informazione sanitaria, per aggiornare medici e farmacie sulle novità terapeutiche.',
                        level: 2,
                    }, {
                        name: 'Medico',
                        slug: slugify('Medico'),
                        description: 'Servizi medici di alta qualità, con competenze in diverse specializzazioni per la salute e la prevenzione.',
                        level: 2,
                    }, {
                        name: 'OSS',
                        slug: slugify('OSS'),
                        description: 'Operatori socio-sanitari per il supporto e l’assistenza ai pazienti, con attenzione alla cura e alla dignità.',
                        level: 2,
                    }, {
                        name: 'Tecnico Sanitario',
                        slug: slugify('Tecnico Sanitario'),
                        description: 'Professionisti qualificati nella diagnostica e nelle tecnologie sanitarie, per un\'assistenza precisa e sicura.',
                        level: 2,
                    }
                ]
            },
            {
                categoryData: {
                    name: 'Tecnici Specializzati',
                    slug: slugify('Tecnici Specializzati'),
                    description: 'Professionisti con competenze tecniche avanzate per la manutenzione, progettazione e produzione di sistemi complessi.',
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Artigiano',
                        slug: slugify('Artigiano'),
                        description: 'Maestri artigiani per lavori personalizzati, con esperienza e precisione nella realizzazione di prodotti unici.',
                        level: 2,
                    }, {
                        name: 'Carpentiere',
                        slug: slugify('Carpentiere'),
                        description: 'Esperti in carpenteria per strutture solide e sicure, dalla progettazione alla costruzione.',
                        level: 2,
                    }, {
                        name: 'Chimico (Tecnici Specializzati)',
                        slug: slugify('Chimico Tecnici Specializzati'),
                        description: 'Professionisti nella lavorazione di prodotti chimici, garantendo sicurezza e innovazione nei processi.',
                        level: 2,
                    }, {
                        name: 'Disegnatore',
                        slug: slugify('Disegnatore'),
                        description: 'Esperti in disegno tecnico, dalla progettazione alla realizzazione di componenti precise.',
                        level: 2,
                    }, {
                        name: 'Elettrico Elettronico',
                        slug: slugify('Elettrico Elettronico'),
                        description: 'Tecnici specializzati nell\'installazione e manutenzione di impianti elettrici ed elettronici.',
                        level: 2,
                    }, {
                        name: 'Fresatore',
                        slug: slugify('Fresatore'),
                        description: 'Esperti nella lavorazione di precisione, con macchine fresatrici avanzate per ottenere componenti su misura.',
                        level: 2,
                    }, {
                        name: 'Macchine Utensili',
                        slug: slugify('Macchine Utensili'),
                        description: 'Operai qualificati nell’uso di macchine utensili per la produzione di componenti di alta precisione.',
                        level: 2,
                    }, {
                        name: 'Manutentore',
                        slug: slugify('Manutentore'),
                        description: 'Professionisti nella manutenzione di impianti e macchinari per garantire la continuità operativa.',
                        level: 2,
                    }, {
                        name: 'Montatore',
                        slug: slugify('Montatore'),
                        description: 'Esperti nell\'assemblaggio di componenti meccaniche ed elettroniche, con precisione e attenzione ai dettagli.',
                        level: 2,
                    }, {
                        name: 'PLC',
                        slug: slugify('PLC'),
                        description: 'Tecnici specializzati in programmazione PLC per automatizzare e ottimizzare processi industriali.',
                        level: 2,
                    }, {
                        name: 'Progettista',
                        slug: slugify('Progettista'),
                        description: 'Professionisti della progettazione, con competenze tecniche per sviluppare soluzioni innovative.',
                        level: 2,
                    }, {
                        name: 'Qualità',
                        slug: slugify('Qualità'),
                        description: 'Esperti nel controllo qualità per garantire l\'eccellenza dei prodotti e il rispetto degli standard.',
                        level: 2,
                    }, {
                        name: 'Responsabile',
                        slug: slugify('Responsabile'),
                        description: 'Gestione delle risorse e supervisione dei processi produttivi, per assicurare efficienza e qualità.',
                        level: 2,
                    }, {
                        name: 'Saldatore',
                        slug: slugify('Saldatore'),
                        description: 'Professionisti della saldatura, capaci di realizzare giunzioni solide e durature nei vari metalli.',
                        level: 2,
                    }, {
                        name: 'Sicurezza e Ambiente',
                        slug: slugify('Sicurezza e Ambiente'),
                        description: 'Esperti nella sicurezza sul lavoro e nella sostenibilità ambientale, per ambienti sicuri e conformi.',
                        level: 2,
                    }, {
                        name: 'Tornitore',
                        slug: slugify('Tornitore'),
                        description: 'Tecnici specializzati nella tornitura, capaci di lavorare materiali con precisione e attenzione ai dettagli.',
                        level: 2,
                    }, {
                        name: 'Ufficio Tecnico',
                        slug: slugify('Ufficio Tecnico'),
                        description: 'Supporto tecnico e progettuale per lo sviluppo di nuovi prodotti e soluzioni aziendali.',
                        level: 2,
                    }, {
                        name: 'Verniciatore',
                        slug: slugify('Verniciatore'),
                        description: 'Esperti nella verniciatura di superfici, con tecniche e materiali per risultati estetici e duraturi.',
                        level: 2,
                    }
                ]
            },
            {
                categoryData: {
                    name: 'Turismo',
                    slug: slugify('Turismo'),
                    description: 'Settore che si occupa dell’organizzazione e promozione di viaggi e servizi turistici.',
                    level: 1,
                },
                subcategoriesData: [
                    {
                        name: 'Agenzia di Viaggi',
                        slug: slugify('Agenzia di Viaggi'),
                        description: 'Servizi di pianificazione e prenotazione viaggi, per esperienze indimenticabili e su misura.',
                        level: 2,
                    }, {
                        name: 'Guida Turistica',
                        slug: slugify('Guida Turistica'),
                        description: 'Esperti locali che offrono tour guidati per scoprire le bellezze e la storia delle destinazioni.',
                        level: 2,
                    }, {
                        name: 'Hotel e Alloggi',
                        slug: slugify('Hotel e Alloggi'),
                        description: 'Sistemazioni confortevoli e di qualità per un soggiorno piacevole e rilassante.',
                        level: 2,
                    }, {
                        name: 'Ristorazione',
                        slug: slugify('Ristorazione'),
                        description: 'Esperienze culinarie uniche, con piatti tipici e cucina internazionale per deliziare ogni palato.',
                        level: 2,
                    }, {
                        name: 'Eventi e Intrattenimento',
                        slug: slugify('Eventi e Intrattenimento'),
                        description: 'Organizzazione di eventi e attività ricreative per arricchire l’esperienza turistica.',
                        level: 2,
                    }
                ]
            }
        ];

        for (const { categoryData, subcategoriesData } of categories) {
            await createCategoryWithSubcategories(prisma, categoryData, subcategoriesData);
        }
    }

    prisma.contractTypeJob.createMany({
        data: [
            { name: 'Tempo indeterminato' },
            { name: 'Tempo determinato' },
            { name: 'Stage/Internship' },
            { name: 'A chiamata' },
            { name: 'A progetto' },
            { name: 'Partita IVA' },
            { name: 'Altro tipo di contratto' },
        ]
    }).then(() => {
        console.log('contractTypeJob created successfully');
    }).catch((error) => { console.log('Error creating contractTypeJob:', error) })

    prisma.modeJob.createMany({
        data: [
            { name: 'Lavoro in presenza' },
            { name: 'Smart working previsto' },
            { name: 'Lavoro da remoto' },
        ]
    }).then(() => {
        console.log('modeJob created successfully');
    }).catch((error) => { console.log('Error creating modeJob:', error) })

    prisma.workingTimeJob.createMany({
        data: [
            { name: 'Full-time' },
            { name: 'Patr-time' },
        ]
    }).then(() => {
        console.log('workingTimeJob created successfully');
    }).catch((error) => { console.log('Error creating workingTimeJob:', error) })

    prisma.levelEducation.createMany({
        data: [
            { name: 'Dottorato di ricerca' },
            { name: 'Master' },
            { name: 'Laurea specialistica (4-5 anni)' },
            { name: 'Laurea breve (3 anni)' },
            { name: 'Diploma di Maturita' },
            { name: 'Licenza media' },
            { name: 'Altri titoli, certificati e patenti' },
        ]
    }).then(() => {
        console.log('LevelEducation created successfully');
    }).catch((error) => { console.log('Error creating LevelEducation:', error) })

    prisma.experienceMinimalJob.createMany({
        data: [
            { name: '1 anno' },
            { name: '2 anni' },
            { name: '3 anni' },
            { name: '5 anni' },
            { name: '10 anni' },
        ]
    }).then(() => {
        console.log('experienceMinimalJob created successfully');
    }).catch((error) => { console.log('Error creating experienceMinimalJob:', error) })
    seedCategories(prisma);
    console.log('Seed завершен!');

    await prisma.$disconnect();
    //npm run prisma:seed
}

main()