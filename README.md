# belly-button-challenge
In this challenge the objective was to create an interactive dashboard to explore the Belly Button Biodiversity dataset,for that the following steps are performed.

  * Used 'document.addEventListener("DOMContentLoaded"..)' and initialized the function,within this function the following steps are performed.
  * Provided url is declared as 'const',also two more variables are declared globally as 'jsondata' and 'dropdown'.
  * Initialize a function 'buildMetadata' for displaying Demographic Information.
      *1 Filter the metadata for the object with the desired sample number.
      *2 Used d3 to select the panel with id of `#sample-metadata`.
      *3 Apeended 'p' tags for each key-value in the filtered metadata.

  * Initialize another function 'buildbar' for creating barcharts.
     *1 Retrieved the samples field and filter the samples for the object.
     *2 Sliced the otu_ids, otu_labels, and sample_values and got the first 10 values.
     *3 declared the trace and layout parameters to get the desired chart.
     *4 Plotted the bar chart using Plotlt.

 * Initialized 'buildbubble' function to create bubble chart.
     *1 Retreived the samples field and filter the samples for the object.
     *2 Retreived the otu_ids, otu_labels, and sample_values.
     *3 declared the trace and layout parameters to get the desired chart.
     *4 Plotted the bubble chart using Plotlt.

* Initialized a function for event listener namely 'optionChanged'.
* Used 'getElementById' function to access the dropdown selected value directly and assigned the value to a variable 'userselection'.
* Called 'buildMetadata','buildbar','buildbubble' functions for the 'userselection'.
* Declared another function 'init'.
     *1 Used d3 to select the dropdown selection field with id of `#selDataset` and assigned it to the variable 'dropdown'.
     *2 Retreived the names from the data.
     *3 append option tags to the selection field for each name.
     *4 retreived the first sample from the name list.
     *5 Called 'buildMetadata','buildbar','buildbubble' functions for the first selection.
     *6 Attached onchange even listner.

* Finally initialize the dashboard by calling the 'init' function.