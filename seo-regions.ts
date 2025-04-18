//Список провинциальных столиц региона Венето
comuni_veneto = [
    "Venezia",
    "Verona",
    "Padova",
    "Treviso",
    "Vicenza",
    "Rovigo",
    "Belluno"
]

//Шаблон генерации SEO-блоков с небольшими отличиями
def generate_seo_blocks(comuni):
seo_data = []

for comune in comuni:
    if comune == "Venezia":
        title = f"Offerte di lavoro a {comune} – Opportunità nel turismo e nei servizi | Lavidea"
meta = f"Trova lavoro a {comune} tra le calli e i canali. Lavidea ti connette con offerte reali da aziende locali e agenzie di selezione."
h1 = f"Offerte di lavoro a {comune}, Veneto"
content = (
    f"{comune} è una città unica al mondo, con un'economia fortemente legata al turismo, alla cultura e ai servizi. "
                f"Le offerte di lavoro a {comune} spaziano dagli hotel e ristoranti ai ruoli amministrativi nelle istituzioni pubbliche e culturali. "
                f"Su Lavidea puoi candidarti facilmente alle ultime posizioni aperte, creando il tuo CV professionale in pochi clic."
            )

        elif comune == "Verona":
title = f"Lavoro a {comune} – Offerte aggiornate nel commercio e logistica | Lavidea"
meta = f"Scopri nuove opportunità lavorative a {comune}. Lavidea seleziona per te le migliori offerte da aziende del territorio veronese."
h1 = f"Offerte di lavoro a {comune}, Veneto"
content = (
    f"{comune} è un polo industriale e commerciale connesso a livello europeo. "
                f"Le principali offerte di lavoro includono ruoli nella logistica, nel commercio all’ingrosso e nella produzione. "
                f"Con Lavidea, puoi accedere facilmente agli annunci più rilevanti per il tuo profilo professionale."
            )

        elif comune == "Padova":
title = f"Offerte di lavoro a {comune} – Annunci aggiornati | Lavidea"
meta = f"Cerchi lavoro a {comune}? Su Lavidea trovi offerte da aziende e agenzie padovane. Candidati ora con il tuo CV online."
h1 = f"Offerte di lavoro a {comune}, Veneto"
content = (
    f"{comune} è un importante centro universitario e medico. "
                f"Le opportunità lavorative sono forti in ambito sanitario, amministrativo e nell’innovazione tecnologica. "
                f"Con Lavidea puoi scoprire ogni giorno nuove proposte di lavoro in linea con le tue competenze."
            )

        elif comune == "Treviso":
title = f"Trova lavoro a {comune} – Annunci dalle aziende locali | Lavidea"
meta = f"Consulta su Lavidea le offerte di lavoro a {comune} e provincia. Entra nel mondo del lavoro veneto con il CV perfetto."
h1 = f"Offerte di lavoro a {comune}, Veneto"
content = (
    f"{comune} vanta un tessuto imprenditoriale ricco, con numerose PMI attive nel settore alimentare, moda e design. "
                f"Le offerte includono ruoli per impiegati, addetti alla produzione, tecnici e personale commerciale. "
                f"Usa Lavidea per trovare l’impiego giusto e candidarti in pochi secondi."
            )

        elif comune == "Vicenza":
title = f"Lavoro a {comune} – Offerte nei settori manifatturiero e tecnico | Lavidea"
meta = f"Vicenza offre opportunità per operai, tecnici e professionisti. Scopri le offerte su Lavidea e invia il tuo CV."
h1 = f"Offerte di lavoro a {comune}, Veneto"
content = (
    f"{comune} è conosciuta per l’eccellenza manifatturiera, in particolare nei settori orafo, meccanico ed elettronico. "
                f"Su Lavidea troverai posizioni aperte in aziende moderne alla ricerca di competenze specialistiche. "
                f"Candidati oggi stesso con il tuo curriculum professionale."
            )

        elif comune == "Rovigo":
title = f"Offerte di lavoro a {comune} – Opportunità locali | Lavidea"
meta = f"Trova lavoro a {comune} e provincia. Lavidea ti aiuta a entrare in contatto con le imprese del territorio polesano."
h1 = f"Offerte di lavoro a {comune}, Veneto"
content = (
    f"{comune} ha un’economia incentrata su agricoltura, logistica e servizi pubblici. "
                f"Con Lavidea puoi cercare impieghi nella tua zona e creare un CV efficace in pochi minuti. "
                f"Accedi a offerte affidabili e reali, verificate ogni giorno."
            )

        elif comune == "Belluno":
title = f"Lavoro a {comune} – Offerte nelle Dolomiti | Lavidea"
meta = f"Cerchi lavoro a {comune}? Lavidea ti offre accesso alle offerte stagionali e stabili nelle aziende delle Dolomiti."
h1 = f"Offerte di lavoro a {comune}, Veneto"
content = (
    f"{comune}, immersa nelle Dolomiti, propone lavoro in ambito turistico, artigianale e nei servizi alla persona. "
                f"Le opportunità variano da ruoli stagionali a posizioni a tempo indeterminato. "
                f"Trova il tuo prossimo impiego con Lavidea: semplice, locale e aggiornato."
            )

seo_data.append({
    "comune": comune,
    "title": title,
    "meta_description": meta,
    "h1": h1,
    "content": content
})

return seo_data

generate_seo_blocks(comuni_veneto)

[{
    'comune': 'Venezia',
    'title': 'Offerte di lavoro a Venezia – Opportunità nel turismo e nei servizi | Lavidea',
    'meta_description': 'Trova lavoro a Venezia tra le calli e i canali. Lavidea ti connette con offerte reali da aziende locali e agenzie di selezione.',
    'h1': 'Offerte di lavoro a Venezia, Veneto',
    'content': "Venezia è una città unica al mondo, con un'economia fortemente legata al turismo, alla cultura e ai servizi. Le offerte di lavoro a Venezia spaziano dagli hotel e ristoranti ai ruoli amministrativi nelle istituzioni pubbliche e culturali. Su Lavidea puoi candidarti facilmente alle ultime posizioni aperte, creando il tuo CV professionale in pochi clic."
},
{
    'comune': 'Verona',
    'title': 'Lavoro a Verona – Offerte aggiornate nel commercio e logistica | Lavidea',
    'meta_description': 'Scopri nuove opportunità lavorative a Verona. Lavidea seleziona per te le migliori offerte da aziende del territorio veronese.',
    'h1': 'Offerte di lavoro a Verona, Veneto',
    'content': 'Verona è un polo industriale e commerciale connesso a livello europeo. Le principali offerte di lavoro includono ruoli nella logistica, nel commercio all’ingrosso e nella produzione. Con Lavidea, puoi accedere facilmente agli annunci più rilevanti per il tuo profilo professionale.'
},
{
    'comune': 'Padova',
    'title': 'Offerte di lavoro a Padova – Annunci aggiornati | Lavidea',
    'meta_description': 'Cerchi lavoro a Padova? Su Lavidea trovi offerte da aziende e agenzie padovane. Candidati ora con il tuo CV online.',
    'h1': 'Offerte di lavoro a Padova, Veneto',
    'content': 'Padova è un importante centro universitario e medico. Le opportunità lavorative sono forti in ambito sanitario, amministrativo e nell’innovazione tecnologica. Con Lavidea puoi scoprire ogni giorno nuove proposte di lavoro in linea con le tue competenze.'
},
{
    'comune': 'Treviso',
    'title': 'Trova lavoro a Treviso – Annunci dalle aziende locali | Lavidea',
    'meta_description': 'Consulta su Lavidea le offerte di lavoro a Treviso e provincia. Entra nel mondo del lavoro veneto con il CV perfetto.',
    'h1': 'Offerte di lavoro a Treviso, Veneto',
    'content': 'Treviso vanta un tessuto imprenditoriale ricco, con numerose PMI attive nel settore alimentare, moda e design. Le offerte includono ruoli per impiegati, addetti alla produzione, tecnici e personale commerciale. Usa Lavidea per trovare l’impiego giusto e candidarti in pochi secondi.'
},
{
    'comune': 'Vicenza',
    'title': 'Lavoro a Vicenza – Offerte nei settori manifatturiero e tecnico | Lavidea',
    'meta_description': 'Vicenza offre opportunità per operai, tecnici e professionisti. Scopri le offerte su Lavidea e invia il tuo CV.',
    'h1': 'Offerte di lavoro a Vicenza, Veneto',
    'content': 'Vicenza è conosciuta per l’eccellenza manifatturiera, in particolare nei settori orafo, meccanico ed elettronico. Su Lavidea troverai posizioni aperte in aziende moderne alla ricerca di competenze specialistiche. Candidati oggi stesso con il tuo curriculum professionale.'
},
{
    'comune': 'Rovigo',
    'title': 'Offerte di lavoro a Rovigo – Opportunità locali | Lavidea',
    'meta_description': 'Trova lavoro a Rovigo e provincia. Lavidea ti aiuta a entrare in contatto con le imprese del territorio polesano.',
    'h1': 'Offerte di lavoro a Rovigo, Veneto',
    'content': 'Rovigo ha un’economia incentrata su agricoltura, logistica e servizi pubblici. Con Lavidea puoi cercare impieghi nella tua zona e creare un CV efficace in pochi minuti. Accedi a offerte affidabili e reali, verificate ogni giorno.'
},
    {
        'comune': 'Belluno',
        'title': 'Lavoro a Belluno – Offerte nelle Dolomiti | Lavidea',
        'meta_description': 'Cerchi lavoro a Belluno? Lavidea ti offre accesso alle offerte stagionali e stabili nelle aziende delle Dolomiti.',
        'h1': 'Offerte di lavoro a Belluno, Veneto',
        'content': 'Belluno, immersa nelle Dolomiti, propone lavoro in ambito turistico, artigianale e nei servizi alla persona. Le opportunità variano da ruoli stagionali a posizioni a tempo indetermitato'
    }