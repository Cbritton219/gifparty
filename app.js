const $gifArea = $("#gif-area");
const $searchbox = $("#search");

function Newgif(res) {
    const Results = res.data.length;
    if (Results) {
        let randomgifs = Math.floor(Math.random() * Results);
        let $addCol = $("<div>", {});
        let $addGif = $("<img>", {
            src: res.data[randomgifs].images.original.url,
        });
        $addCol.append($addGif);
        $gifArea.append($addCol)
    }
}


$("form").on("submit", async function (evt) {
    evt.preventDefault();

    let searchTerm = $searchbox.val();
    $searchbox.val("");

    const resp = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    Newgif(resp.data);
});

$("#remove").on("click", function () {
    $gifArea.empty();
});