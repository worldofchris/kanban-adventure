describe("Adventure", function() {

  var adventure;

  beforeEach(function() {

    // Given some options
    var map = {
      "root": ["airports", "fresh-fruit-juice", "art-history"],
      "options":[
        {
          "name":  "airports",
          "title": "Airports",
          "content": {
            "image": "resources/airport-queue.jpg"
          },
          "notes": ["Who can tell me what this is?  It's an example of a dysfunctional queuing strategy." +
                    "Why is it dusfunctional?  Because an airline employee has to keep expediting by   " +
                    "shouting the names of closing flights and pulling people to the front of the queue"],
          "links": ["art-history", "limit-queue-sizes", "make-the-work-visible", "feedback"]
        },
        {
          "name":  "fresh-fruit-juice",
          "title": "Fresh Fruit Juice",
          "content": {
            "image": "resources/fresh-fruit-juice.jpg"
          },
          "notes": ["Man I love Fresh Fruit Juice"]
          },
        {
          "name": "art-history",
          "title": "Art History"
        },
        {
          "name": "make-the-work-visible",
          "title": "Make the Work Visible"
        }
    ]};

    adventure = new Adventure(map);
  });

  it("should give me some options for my adventure to begin", function() {

    // And a template
    adventure.setRootTemplate("{{#.}}|{{title}}{{/.}}|");

    // I should see this at the root / start of my adventure
    var expected_html = "|Airports|Fresh Fruit Juice|Art History|";

    expect(adventure.root()).toEqual(expected_html);

  });

  it("should have a link from an option to its content", function() {

    var options = setFixtures(adventure.root());
    expect(options.find('a')).toHaveAttr('href', '#/node/airports');
    // We should have a route for each of the options
    expect(crossroads.getNumRoutes()).toBe(3);
  });

  it("should put new content on the stage when we navigate to it", function() {

    var stage = sandbox();
    adventure.setStage(stage);
    navigate('airports', adventure);

    expect(stage).toContainElement('img');

  });

  it("should present simple content - a single image", function() {

    var airports = setFixtures(adventure.node("airports").html);
    // The content image should be displayed

    expect(airports).toContainElement('img');
    expect(airports.find('img')).toHaveAttr('src', 'resources/airport-queue.jpg');

    // This should work for multiple nodes

    var fruit_juice = setFixtures(adventure.node("fresh-fruit-juice").html);
    // The content image should be displayed

    expect(fruit_juice).toContainElement('img');
    expect(fruit_juice.find('img')).toHaveAttr('src', 'resources/fresh-fruit-juice.jpg');


  });

  it("should pop up the notes so the presenter can see them but not the audience", function() {
    var notepad = {
      setNotes: function(notes) {notes = notes;}
    };
    spyOn(notepad, 'setNotes');

    adventure.setNotePad(notepad);
    navigate('airports', adventure);

    expect(notepad.setNotes).toHaveBeenCalledWith("Who can tell me what this is?  It's an example of a dysfunctional queuing strategy.Why is it dusfunctional?  Because an airline employee has to keep expediting by   shouting the names of closing flights and pulling people to the front of the queue");

  });

  it("should not explode if there is no content in a node", function() {

    var node = adventure.node("does-not-exist");
    expect(node).toBeUndefined();
  });

  it("should give me some options to continue my adventure", function() {

    var stage = sandbox();
    adventure.setStage(stage);
    navigate('airports', adventure);

    // Make thse a loop?
    expect(stage).toContainElement('div#art-history');
    expect(stage).toContainElement('div#limit-queue-sizes');
    expect(stage).toContainElement('div#make-the-work-visible');
    expect(stage).toContainElement('div#feedback');
  });

  it("should just display the title if there is no content", function() {

    var stage = sandbox();
    adventure.setStage(stage);
    navigate('art-history', adventure);

    expect(stage).toContainElement('#node-title');
    expect(stage.find('#node-title')).toContainText('Art History');

  });

  it("should display the title of the current content", function() {
    var title_header = sandbox();
    adventure.setTitleHeader(title_header);
    navigate('art-history', adventure);
    expect(title_header).toContainElement('#node-title-header');
    expect(title_header.find('#node-title-header')).toContainText('Art History');
  });

});


