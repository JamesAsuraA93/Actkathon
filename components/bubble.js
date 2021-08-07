import { data } from "autoprefixer";
import { useEffect, useRef } from "react";
export default (props) => {
  useEffect(() => {
    window.document.querySelector("#my_dataviz").innerHTML = "";
    if (window.d3) {
      console.log("d3 is loaded");

      const d3 = window.d3;

      var width = 450;
      var height = 450;
      var svg = d3
        .select("#my_dataviz")
        .append("svg")
        .attr("width", 450)
        .attr("height", 450)
        .attr("class", "mx-auto");

      const max = Math.max(
        ...props.data.map(({ _source }) => {
          return _source.projectMoney;
        })
      );

      var data = props.data.map(({ _source }) => {
        let s = _source.projectMoney / (max / 50);
        if (s < 3) s = 3;
        if (s > 100) s = 100;
        return {
          size: s,
          select: _source.projectId == props.id,
        };
      });

      console.log("data", data);

      // Initialize the circle: all located at the center of the svg area
      var node = svg
        .append("g")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("r", (i) => i.size)
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .style("fill", (i) => (i.select ? "#F28A8A" : "#CCC0C0"));

      var simulation = d3
        .forceSimulation()
        .force(
          "center",
          d3
            .forceCenter()
            .x(width / 2)
            .y(height / 2)
        ) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(0.1)) // Nodes are attracted one each other of value is > 0
        .force(
          "collide",
          d3.forceCollide().strength(0.01).radius(20).iterations(1)
        ); // Force that avoids circle overlapping
      simulation.nodes(data).on("tick", function (d) {
        node
          .attr("cx", function (d) {
            return d.x;
          })
          .attr("cy", function (d) {
            return d.y;
          });
      });
    } else {
      console.log("d3 is not loaded");
    }
  }, [props.data, window.d3]);

  return <div id="my_dataviz"></div>;
};
