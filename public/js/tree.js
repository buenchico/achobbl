var tree_structure = {
    chart: {
        container: "#OrganiseChart6",
        levelSeparation:    25,
        siblingSeparation:  70,
        subTeeSeparation:   70,
        nodeAlign: "BOTTOM",
        scrollbar: "fancy",
        padding: 35,
        node: { HTMLclass: "evolution-tree" },
        connectors: {
            type: "curve",
            style: {
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke": "#ccc"
            }
        }
    },

    nodeStructure: {
        text: { name: "MATERIA" },
        HTMLclass: "the-parent",
        children: [
            {
                text: { name: "Elemental" },
                children: [
                  {
                    text: { name: "Molecular" },
                    children: [
                      { text: {name: "Metal"} },
                      { text: {name: "Gas noble"} }
                    ]
                 },
                  { text: { name: "Diatómica" } }
                ]
            },
            {
                text: { name: "Compuesta" },
                children: [
                  { text: { name: "Orgánica" } },
                  { text: { name: "Inorgánica" } }
                ]
            }
        ]
    }
};
