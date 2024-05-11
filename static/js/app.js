document.addEventListener("DOMContentLoaded",function(){
  const url="https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";
    let jsondata; // Define jsondata globally
    let dropdown; // Define dropdown globally
  d3.json(url).then(function(jsondata){
    data=jsondata;
    // Build the metadata panel
    function buildMetadata(sample){
      // get the metadata field
      
      var meta=jsondata.metadata.filter(item=>item.id==sample)[0];// Filter the metadata for the object with the desired sample number
      var field=d3.select('#sample-metadata').html("");// Use d3 to select the panel with id of `#sample-metadata`
      
      // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.


      Object.entries(meta).forEach(([key,value])=>{
        field.append("p").text(`${key.toUpperCase()}:${value}`);
      });



    
    }
    
    // function to build both charts
    // Build a Bar Chart
    
    function buildbar(sample){
      var samples=jsondata.samples.filter(item=>item.id==sample)[0];// Get the samples field and filter the samples for the object with the desired sample number
      var otuid=samples.otu_ids.slice(0,10).map(id=>`OTU ${id}`).reverse();// Get the otu_ids, otu_labels, and sample_values
      var svalues=samples.sample_values.slice(0,10).reverse();
      var slabel=samples.otu_labels.slice(0,10);
      // Render the Bar Chart
      
      var trace={               // define the trace for  the Bar Chart
        type:"bar",
        x:svalues,
        y:otuid,
        orientation:"h",
        text:slabel

      };
      layout={
        title:"Top 10 Bacteria culture found.",  //set layout
        margin:{
          l:100,
          r:70,
          t:50,
          b:50
        },
        xaxis:{title:"Number of Bacteria"}
      };
      var data=[trace];
      Plotly.newPlot("bar",data,layout);  //plot the bar chart using Plotly
    }

    // Build a Bubble Chart

    function buildbubble(sample){

      var samples=jsondata.samples.filter(item=>item.id==sample)[0]; // Get the samples field and filter the samples for the object 
      var samval=samples.sample_values;   // Get the otu_ids, otu_labels, and sample_values
      var samlab=samples.otu_labels;
      var otid=samples.otu_ids;

      // Render the Bubble Chart
      var trace={                          // define the trace for  the bubble Chart
        x:otid,
        y:samval,
        mode:'markers',
        marker:{
          size:samval,
          color:otid,
          colorscale:'Earth',
          type:'heatmap'
        },
        text:samlab

      };
      var layout={                                       //set layout
        title:"Bacteria Cultures per sample",
        xaxis:{title:"OTU ID"},
        yaxis:{title:"Number of Bacteria"},
        height:500,
        
      };
      var data=[trace];
      Plotly.newPlot("bubble",data,layout);       //plot the bubble chart using Plotly


    }

    // Function for event listener
    function optionChanged(){
      var userselection = document.getElementById('selDataset').value; // Access the dropdown selected value directly
      
      console.log(userselection);

      buildMetadata(userselection);  //call the functions.
      buildbar(userselection);
      buildbubble(userselection);



    }
    // Use the list of sample names to populate the select options
//     // Hint: Inside a loop, you will need to use d3 to append a new
//     // option for each sample name.
    function init(){
      var dropdown=d3.select('#selDataset');  //assign the dropdown field to a variable
      var names=jsondata.names;               //Get the names from the data.
      names.forEach((name)=>{
        dropdown.append("option").text(name).property("value",name);      //append option tags to the selection field for each name.
      });

      // Get the first sample from the list

      var first=names[0];
      buildMetadata(first); //call the functions
      buildbar(first);
      buildbubble(first);
       // Attach onchange even listner
      dropdown.on("change", function(){
        optionChanged();
      });
        



    }
    // Initialize the dashboard
    init();
    
    
   
  });
 
});

  
    


    


    




