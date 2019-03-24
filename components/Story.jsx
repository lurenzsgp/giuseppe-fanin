// import Link from 'next/Link';
import {transparentize} from 'polished';
import styled, {media} from '../utils/ThemedComponent';

const TextContainer = styled.div`
    color: ${props => props.theme.color.dark_liver};
    background-color: ${props => transparentize(.5, props.theme.color.white)};

    box-sizing: border-box;
    padding: 2rem;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;

    ${media.tablet`
        width: 90vw;
        border-radius: 10px;
    `}

    ${media.desktop`
        width: 80vw;
    `}

    ${media.hd`
        width: 70vw;
    `}
`;

const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    ${media.desktop`
        flex-direction: row;
        justify-content: center;
    `}
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    ${props => props.shrink ? 'flex-shrink: 2;': ''}
`;

const Story = () =>
{
    return (<TextContainer>
        <h1>La strada di Giuseppe Fanin </h1>
        <h3>24 anni per la santità</h3>
        <p>Tratto dalla mostra a cura di Azione Cattolica e Movimento Cristiano lavoratori</p>
        <p>Una notte di novembre. È la sera del 4 novembre 1948. Un giovane sta tornando a casa in bicicletta, dopo essersi incontrato con la fidanzata. All'improvviso, lungo la strada che da San Giovanni in Persiceto porta la frazione di lorenzatico, e gli viene aggredito è colpito a morte con una spranga di ferro. Aveva 24 anni. Si chiamava Giuseppe Fanin</p>
        <ImagesContainer>
            <Image shrink src='static/fanin_1.jpg' />
            <Image src='static/fanin_2.jpg' />
        </ImagesContainer>

        <h2>Giuseppe e la sua famiglia</h2>
        <p>Nato e cresciuto a Lorenzatico , Giuseppe è il terzo dei dieci figli di una famiglia di coltivatori diretti di profonda religiosità cristiana. Fin da adolescente e gli si rendeva disponibile per far giocare i fratelli più piccoli, per pulire la casa, arrivando a stirarsi da solo i pantaloni e, nel tempo libero dallo studio, ad aiutare i familiari nel lavoro nei campi. La passione per il mondo agricolo segnerà tutta la sua breve vita.</p>
        <ImagesContainer><Image src='static/fanin_3.jpg' /></ImagesContainer>

        <h2>Giuseppe e lo studio</h2>
        <p>A quei tempi, soprattutto per chi apparteneva ad una famiglia numerosa e di modeste condizioni economiche, era già un traguardo conseguire la licenza elementare. Giuseppe arriva a laurearsi in scienze agrarie. all'Università di Bologna Nel febbraio 1948, restando in corso nonostante le vicende belliche è un ricovero di vari mesi in ospedale.Durante gli studi accademici e gli diventa animatore instancabile del gruppo persicetano degli universitari di azione cattolica.</p>
        <ImagesContainer><Image src='static/fanin_4.jpg' /></ImagesContainer>

        <h2>Giuseppe e la fidanzata</h2>
        <p>Giuseppe ancora giovanissimo quando sente il primo affetto per lidia, una ragazzina del paese. La loro conoscenza matura nel contesto della vita parrocchiale e ben presto giungono a orientarsi al matrimonio. In Lidia egli amava la Fede e il fisico, la bontà e la bellezza, e i loro incontri non sono mai stati occasioni di peccare: così si scrive a 17 anni, quasi contemplando il loro rapporto d'amore, che crescerà come Gioiosa risposta alla volontà di Dio, anche tra situazioni difficili e lontananze.</p>
        <p><i>"Io amo te di un amore che giunge fino a dio. È il mio amore è puro perché anch'io sono puro e voglio portare la mia purezza al talamo matrimoniale."</i></p>
        <ImagesContainer>
            <Image shrink src='static/fanin_5.jpg' />
            <Image src='static/fanin_6.jpg' />
        </ImagesContainer>

        <h2>Giuseppe e la situazione sociale</h2>
        <p>Salari al limite della sopravvivenza, contratti di lavoro evanescenti, condizioni di vita indegne: nell'immediato dopoguerra era ancora questa la situazione dell'enorme massa dei braccianti agricoli emiliano-romagnoli, uomini e Donne che lavoravano le terre dei grandi proprietari terrieri. In tale esclusiva problematica sociale si contrapponevano due concezioni: l'una mirava a riunire i lavoratori agricoli in grandi organismi collettivi strumentali alla lotta politica di matrice marxista punto e virgola l'altra sulla scia del pensiero sociale Cristiano intendeva portare i lavoratori ad essere protagonisti responsabili della propria elevazione socio-economica del quadro di giuste riforme e del bene comune. È in questo contesto che Giuseppe sospinto dalla propria formazione religiosa e culturale matura la sua vocazione sociale.</p>
        <ImagesContainer><Image src='static/fanin_7.jpg' /></ImagesContainer>

        <h2>Giuseppe e l'impegno sociale</h2>
        <p>Ancora universitario, Giuseppe entra nell'associazione dei lavoratori cristiani di Bologna, dedicandosi allo studio dei problemi del mondo agricolo e della dottrina sociale cristiana. Dopo la laurea nonostante altre offerte di lavoro economicamente allettanti, egli preferisce continuare l'impegno dell'associazione, divenendone un dirigente del settore terra organizza è arrivato il lavoro, collaborano progettazione di cooperative agricole operai e promuove la costituzione della sezione territoriale del sindacato libro di ispirazione Cristiana la sua attività appassionata aeroporto teneri incontri in numerosissime località e provincia. Il 7 novembre 1948 avrebbe dovuto presentare un innovativo contratto di compartecipazione dei braccianti in un pubblico convegno organizzato a Molinella con la presenza del sottosegretario dell'Agricoltura. Ma muore due giorni prima ucciso da tre iscritti del PCI locale.</p>
        <ImagesContainer><Image src='static/fanin_8.jpg' /></ImagesContainer>

        <h2>Giuseppe e la scelta della non violenza</h2>
        <p>Soprattutto a seguito della rottura dell’unità sindacale nazionale (luglio 1948), in varie parti del Nord Italia e in particolare nel bolognese si assiste a un dilagare di intimidazione e di aggressioni contro i membri del nascente sindacato libero di ispirazione cristiana. Anche Giuseppe prima subisce minacce, poi viene pubblicamente attaccato in un manifesto. Così alcuni amici gli consigliano ripetutamente di dotarsi di un’arma per difendersi, ma egli rifiuta sempre.</p>
        <p><i>“Se mi dovessi trovare un giorno nella necessità di difendermi e difendendomi uccidessi qualcuno, forse avrai tutti gli anni che mi rimangono amareggiati da un rimorso; potrei rovinare una povera donna, dei bambini innocenti. No, no; non voglio avvelenarmi la vita; nei guai io lascio gli altri, perché in Dio e nel paradiso io ci credo! ... E poi, se Dio mi chiedesse questo, come potrei dirgli di no?“</i></p>
        <p>(Dalle testimonianze dei suoi amici)</p>

        <h2>Il segreto della sua esistenza</h2>
        <p>La vita familiare, quella parrocchiale e quella associativa di Azione cattolica rappresentano il terreno di base della formazione spirituale del giovane Fanin. All’amore di Dio egli attingeva mediante alla regolare partecipazione alla Messa domenicale (E spesso anche quella feriale), con la confessione frequente, con la preghiera intensa (soprattutto del Rosario), con gli Esercizi Spirituali annuali.</p>
        <ImagesContainer><Image src='static/fanin_9.jpg' /></ImagesContainer>
        <p>All’età di 23 anni, meditando sulle proprie scelte esistenziali, Giuseppe si impegna evitare ogni forma di peccato e a imitare con amore il Cristo sofferente e umiliato, anche a costo della vita: è il terzo e più alto grado di perfezione spirituale secondo il pensiero di Sant’Ignazio di Loyola.<br />Il foglio su cui aveva fissato questi propositi viene trovato insanguinato in tasca Giuseppe il giorno dell’uccisione.</p>
        <p><i>“Ponendomi dinanzi a Dio e con il tuo santo aiuto io intendo ora compilare questo scritto, cercando di mettere sulla carta, con la maggior fedeltà possibile, quelli che sono i pensieri e i propositi maturati nella mia anima e nel mio cuore durante questi, che spero, salutari e santi esercizi.</i></p>
        <p><i>Per primo punto, pur considerando le mancanze che in seguito per la mia stessa debolezza commetterò, intendo aderire al terzo grado di perfezione spirituale, secondo il pensiero di Sant’Ignazio. Quanto sopra nell’ambito della vocazione dello stato di vita scelto (benché non sia ancora detta l’ultima parola) che a rigor di termini è definito matrimoniale.</i></p>
        <p><i>In conseguenza di quanto sin qui affermato, declino ora i miei concreti propositi nei miei rapporti con Dio, me stesso ed il prossimo.</i></p>
        <p><i>1. Verso Dio: a prescindere dalla mia debolezza e difficoltà nell’evitare specie le occasioni prossime di peccato veniale, e anche di certi peccati mortali, io faccio vivo proposito di non ricadervi, e, pertanto, mi impegnerò alla comunione settimanale e, possibilmente, intrasettimanale; alla confessione quindicinale e anche settimanale, alla preghiera quotidiana più devota e mai dimenticata. E, a rispetto del nome di Dio e dei santi sia nel pronunciarli come nelle immagini.</i></p>
        <p><i>2. Verso me stesso: prima di tutto nella purezza evitando: pensieri con relativo lavorio della fantasia che possano portarmi a considerare cose impure o anche desideri cattivi; parole che possano offendere il sentimento della purezza specie nella persona da me amata; opere come sguardi su persone o cose che mi causino pensieri impuri, o toccamenti, abbracci e baci che offendano nella persona amata o in me sentimenti di purezza; e nella conservazione del mio corpo evitando pericoli non necessari per la mia anima nelle sue facoltà di intelligenza, volontà e sentimento.</i></p>
        <p><i>3. Verso il prossimo: usando l’equilibrio cristiano nei miei rapporti con tutto il mio prossimo, evitando tutto quanto può venir meno alla carità. E qui intendo fare un particolare proposito di maggior carità e comprensione nei rapporti con i miei familiari”</i></p>
        <p>(Pagina scritta al termine degli ultimi esercizi spirituali: all’età di 23 anni)</p>

        <h2>La chiesa di Bologna sulle tracce della sua santità</h2>
        <p>La comunità ecclesiale bolognese ha sempre avuto cara la memoria di Giuseppe Fanin, giungendo ascoltare le tracce di santità della sua vita e i segni del martirio nella sua morte.</p>
        <ImagesContainer><Image src='static/fanin_10.jpg' /></ImagesContainer>
        <p>Prima dell’assoluzione al tumulo il vescovo ausiliare Mons. Bolognini, a nome del cardinale arcivescovo di Bologna, porgeva a Giuseppe Fanin il saluto e la lode della Chiesa che egli aveva servito fedelmente e valorosamente sino alla morte. A consolazione degli amici costernati, rievocava le parole del Vangelo: “bravo, servo buono e fedele, entra ora nel gaudio del tuo Signore!”.</p>
        <p>(Dalla cronaca dei funerali celebrati il 7 novembre 1948)</p>
        <ImagesContainer><Image src='static/fanin_11.jpg' /></ImagesContainer>
        <p><i>“Se l’organizzazione e la tecnica vanno valorizzate e utilizzate, non dimentichiamo mai, d’altra parte, che è lo spirito che vivifica. Questa realtà cioè riproposta con più forti incisività dal sacrificio di Fanin, e di tanti altri testimoni, che hanno contribuito a difendere e a crescere i valori della vera pace e della concordia, e a donare le energie più valide per il rinnovamento e un avvenire migliore della civile convivenza”</i></p>
        <p>(dall’omelia del Card. A. Pina del 4 novembre 1978)</p>
        <ImagesContainer><Image src='static/fanin_12.jpg' /></ImagesContainer>
        <p><i>La chiesa di Bologna si onora di Giuseppe Fanin, ne ammira la vita e ne venire alla nobile morte. Mentre non sicure che siano ricordati gli uccisori (che, perdonando affida alla misericordia di Dio), non intende consentire che si sbiadisca la memoria di questo suo figlio retto e animoso.</i></p>
        <p>(Dall’omelia del Card. G. Biffi del 6 novembre 1988)</p>
        <p>Oggi la chiesa di Bologna lo venera con il titolo di “Servo di Dio“</p>
        <p><i>“ le nuove generazioni trovano in Giuseppe Fanin un incitamento provvidenziale e un esempio. La brutalità dei suoi carnefici lo fissato per sempre tra i giovani, i quali perciò lo devono sentire come uno di loro, coetaneo, amico, fratello di fede“</i></p>
        <p>(Dall’omelia del Card. G. Biffi Del 6 novembre 1988)</p>

        <h2>Il Settantesimo anniversario del suo Sacrificio</h2>
        <p>Nel corso del 2018 numerose sono state le iniziative legate al ricordo del Sacrificio di Giuseppe.</p>
        <p>L’Arcidiocesi di Bologna - Commissione diocesana per la pastorale sociale e del lavoro, ha presentato un cortometraggio, frutto di un laboratorio giovani, dal titolo I Migliori anni della nostra vita. L’anteprima è stata proiettata Sabato 3 novembre u.s., presso il Cinema Teatro Fanin di San Giovanni, dove ha seguito una seconda visione Domenica 11 p.v. alle ore 21.</p>
        <p>Il filmato con la regia di Otello Cenci, le riprese e il montaggio di Eugenio Bollani, la sceneggiatura di Otello Cenci e Giampiero Pizzol, l'amichevole partecipazione di Paolo Cevoli e l'interpretazione di uno straordinario gruppo di giovani di alcuni paesi dell'entroterra bolognese, vuole essere una ricostruzione degli ultimi giorni della vita di Fanin, giovane laureato impegnato nelle Acli e nella difesa dei diritti dei lavoratori agricoli.</p>
        <ImagesContainer><Image src='static/fanin_13.jpg' /></ImagesContainer>
        <p>Ora il film è in fase di produzione e al più presto verrà presentato in formato DVD per la distribuzione. Ad oggi è portato orgogliosamente ad eventi parrocchiali privati dagli attori che raccontano di come l’esperienza della recitazione in un contesto così particolare li abbia avvicinati fortemente alla figura di Pippo, formando un gruppo ben consolidato. </p>
        <p>Nella parrocchia natale di Giuseppe Fanin, San Giacomo di Lorenzatico, in San Giovanni in Persiceto è stata inaugurata il 4 Novembre la Mostra Permanente a lui dedicata. Ad oggi sono organizzate periodicamente visite guidate (per chi è interessato fare riferimento alla sezione contatti).</p>
        <p>In collaborazione con le scuole di San Giovanni in Persiceto sono stati organizzati incontri con il Magistrato Marco Mescolini sul tema Giustizia e Lavoro presentando ai giovani persicetani la figura del Servo di Dio.</p>
        <p>I Maddalen's Brothers  la christian band bolognese, sempre il 4 Novembre hanno presentato in Anteprima il brano  “L’una e Cinquanta” liberamente ispirata alla figura di Giuseppe Fanin raggiungibile al <a target='blank' href='https://open.spotify.com/album/6yufUAk3TjdA6T78bCFabS'>link</a>.</p>
        <p><i>Nella canzone vengono richiamati gli aspetti cardine della vita del Servo di Dio, ovvero i valori cristiani, la semplicità e l’amore per la fidanzata. Da un’ intervista la spiegazione del titolo del brano “Indica l’ora nella quale è morto, ma rimanda anche alla luna che ha illuminato la sua strada negli ultimi suoi passi, e alle cinquanta «Ave Maria» del rosario, al quale era molto legato.”</i></p>
        <p>L’Arcidiocesi di Bologna - Commissione diocesana per la pastorale sociale e del lavoro, ha presentato un cortometraggio, frutto di un laboratorio giovani, dal titolo I Migliori anni della nostra vita. L’anteprima è stata proiettata sabato 3 novembre u.s., presso il Cinema Teatro Fanin di San Giovanni, dove seguirà una seconda visione domenica 11 p.v. alle ore 21.</p>
        <p>Il filmato con la regia di Otello Cenci, le riprese e il montaggio di Eugenio Bollani, la sceneggiatura di Otello Cenci e Giampiero Pizzol, l'amichevole partecipazione di Paolo Cevoli e l'interpretazione di uno straordinario gruppo di giovani di alcuni paesi dell'entroterra bolognese, vuole essere una ricostruzione degli ultimi giorni della vita di Fanin, giovane laureato impegnato nelle Acli e nella difesa dei diritti dei lavoratori agricoli.</p>

        <h2>Nel nome di Giuseppe Fanin</h2>
        <p>L’uccisione di Giuseppe Fanin ebbe un eco profonda nel paese. Da allora e non solo nel bolognese continuano ad aprirsi nuove sedi sociali... </p>
        <p>... E ad attenuarsi nuovi iniziative che portano il suo nome, intendendo ispirarsi all’esempio della sua vita e alla sua luminosa testimonianza cristiana.</p>

        <h3>PREGHIERA</h3>
        <p>
            O Dio, padre di misericordia,
            <br />che hai donato al tuo Servo
            <br />Giuseppe Fanin
            <br />l’ideale della giovinezza esemplare,
            <br />la forza della testimonianza disarmata,
            <br />la volontà di amarti preferendo
            <br />a qualunque ricchezza e alla stessa vita
            <br />la somiglianza al Cristo sofferente e umiliato,
            <br />e gli hai concesso di sigillare con il sangue
            <br />il suo impegno per la libertà
            <br />e la giustizia del lavoro,
            <br />ti chiediamo di ravvivare noi
            <br />la stessa Fede e la stessa Carità
            <br />perché possiamo diffondere il messaggio
            <br />di riconciliazione e di salvezza
            <br />che emana dal suo esempio.
            <br />Per Cristo nostro signore. Amen.
        </p>
    </TextContainer>);
}

export default Story;