import Graph from "graphology";
import sigma from "sigma";
import {
    assign as forceAtlas2Assign,
    inferSettings as forceAtlas2InferSettings,
} from "graphology-layout-forceatlas2";
const graph = new Graph();
const ratio = 3;
const element = document.getElementById("container");

let elementwidth = element.getBoundingClientRect().width;
let elementheight = element.getBoundingClientRect().height;

const CORE_ID = "einzelunternehmen";

const nodes = [
    {
        id: "einzelunternehmen",
        label: "Einzelunternehmen",
        description:
            "Zentraler Knoten: Einfache Unternehmensform, Inhaber allein verantwortlich.",
    },
    {
        id: "unternehmer_inhaber",
        label: "Unternehmer / Inhaber",
        description:
            "Trifft alle Entscheidungen; trägt das volle Risiko; alleinige Geschäftsführung.",
    },
    {
        id: "haftung",
        label: "Haftung",
        description:
            "Unbeschränkte Haftung mit Betriebs- und Privatvermögen; hohes persönliches Risiko.",
    },
    {
        id: "kapital_finanzierung",
        label: "Kapital & Finanzierung",
        description:
            "Eigenkapital des Inhabers; Fremdkapital (z. B. Bankkredite); keine Gesellschafterbeteiligung; Kredite oft nur mit privaten Sicherheiten.",
    },
    {
        id: "gruendung",
        label: "Gründung",
        description:
            "Einfache Gründung; Gewerbeanmeldung; kein Mindestkapital; geringe Gründungskosten.",
    },
    {
        id: "gewinn_steuern",
        label: "Gewinn & Steuern",
        description:
            "Gewinn gehört dem Inhaber; Einkommensteuer/ggf. Gewerbesteuer; keine Körperschaftsteuer.",
    },
    {
        id: "buchfuehrung",
        label: "Buchführung",
        description:
            "Einnahmen-Überschuss-Rechnung üblich; doppelte Buchführung nur bei Überschreiten bestimmter Grenzen; weniger Bürokratie.",
    },
    {
        id: "besonderheiten",
        label: "Besonderheiten / Hinweise",
        description:
            "Kleinunternehmer-Regelung möglich; Rechtsformen-Übergang (z. B. zu GmbH) ist Option; begrenzte Skalierung ohne Fremdbeteiligung.",
    },
];

function drawAllNodes(arr = new Array()) {
    for (let i = 0; i < arr.length; i++) {
        let attr = { label: arr[i].label, x: arr[i].x, y: arr[i].y };

        let nev = 1;

        if (arr[i].id != CORE_ID) {
            if (Math.random() > 0.5) nev = -1;

            attr.x = (Math.floor(Math.random() * elementwidth) - 1) * nev;
            nev = 1;
            if (Math.random() > 0.5) nev = -1;
            attr.y = (Math.floor(Math.random() * elementheight) - 1) * nev;
            attr.size = 20;
            graph.addNode(arr[i].id, attr);
        } else {
            attr.x = 0;
            attr.y = 0;
            attr.size = 40;
            graph.addNode(arr[i].id, attr);
        }
    }
}

function drawEdgetoCore() {
    let nodelist = graph.nodes().filter((e) => e != CORE_ID);
    let size = 5;
    let color = "black";
    console.log(nodelist);
    for (let i = 0; i < nodelist.length; i++) {
        graph.addEdge(CORE_ID, nodelist[i], {
            size: size,
            color: color,
        });
    }
}
drawAllNodes(nodes);
drawEdgetoCore();

const renderer = new sigma(graph, element);
const camera = renderer.getCamera();

camera.setState({
    x: 0,
    y: 0,
    ratio: ratio,
});
camera.enabledPanning = false;
camera.enabledRotation = false;
camera.enabledZooming = false;
camera.minRatio = ratio;
camera.maxRatio = ratio * 1.25;
