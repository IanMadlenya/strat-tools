$(function() {
    
    // global variables
    var width = 600;
    var height = 600;
    var margin = {"left": 35, "bottom": 35, "right": 35}
    
    // x scale
    var xScale = d3.scale.linear()
        .domain([0, 100])
        .range([0, width - margin.left - margin.bottom])
        
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .ticks(0)
        .orient("bottom");
        
    // y scale
    var yScale = d3.scale.linear()
        .domain([0, 100])
        .range([height - margin.bottom, 0])
        
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .ticks(0)
        .orient("left");
        
    // creating the main svg
    var svg = d3.select("#canvas")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "svg")

// Ugly static axes

    var xAxisLeft = svg.append("line")
        .attr("x1", margin.left + 50)
        .attr("y1", height - 25)
        .attr("x2", width / 2 + margin.left - 10)
        .attr("y2", height - 25)
        .attr("stroke-width", 2)
        .attr("stroke", "gray");

    var xAxisLeftLabel = svg.append("text")
        .attr("x", (width / 4) + 25)
        .attr("y", height - 10)
        .text("Helpful");

    var xAxisRight = svg.append("line")
        .attr("x1", (width / 2) + margin.left + 10)
        .attr("y1", height - 25)
        .attr("x2", width - margin.right + 10)
        .attr("y2", height - 25)
        .attr("stroke-width", 2)
        .attr("stroke", "gray");

    var xAxisRightLabel = svg.append("text")
        .attr("x", (3/4) * width - 25)
        .attr("y", height - 10)
        .text("Harmful");

    var yAxisTop = svg.append("line")
        .attr("x1", margin.left + 25)
        .attr("y1", 25)
        .attr("x2", margin.left + 25)
        .attr("y2", height / 2 - 10)
        .attr("stroke-width", 2)
        .attr("stroke", "gray");

    var yAxisTopLabel = svg.append("text")
        .attr("x", 5)
        .attr("y", height / 4 )
        .attr("kerning", 0)
        .text("Internal");

    var yAxisBottom = svg.append("line")
        .attr("x1", margin.left + 25)
        .attr("y1", height/2 + 10)
        .attr("x2", margin.left + 25)
        .attr("y2", height - margin.bottom - 25)
        .attr("stroke-width", 2)
        .attr("stroke", "gray");

    var yAxisBottomLabel = svg.append("text")
        .attr("x", 5)
        .attr("y", (3/4) * height - margin.bottom)
        .attr("kerning", 0)
        .text("External");

    // Draw the quadrants

    var quadrants = svg.append("g")
        .attr("transform", "translate(" + margin.left + ", 0)")

    var quadrant_rect = quadrants.append("rect")
        .attr("x", margin.left)
        .attr("y", 0)
        .attr("width", width - margin.left - margin.right)
        .attr("height", height - margin.bottom)
        .attr("rx", 20)
        .attr("ry", 20)
        .attr("class", "quadrant_rect");

    var quad_vert = quadrants.append("line")
        .attr("x1", width / 2)
        .attr("y1", 0)
        .attr("x2", width / 2)
        .attr("y2", height - margin.bottom)
        .attr("stroke-width", 2)
        .attr("stroke", "gray");

    var quad_horiz = quadrants.append("line")
        .attr("x1", 0 + margin.left)
        .attr("y1", height / 2)
        .attr("x2", width - margin.right)
        .attr("y2", height / 2)
        .attr("stroke-width", 2)
        .attr("stroke", "gray");
});
