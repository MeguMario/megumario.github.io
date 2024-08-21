/*import axios from axios*/
const baseUrl = 'https://api.allorigins.win/raw?url=https://api.mangadex.org';
const coverUrl = 'https://api.allorigins.win/raw?url=https://uploads.mangadex.org'
const mdUrl = 'https://mangadex.org'

var test_output = document.getElementById('text2')
var test_output2 = document.getElementById('text3')
var test_img = document.getElementById('manga_cover')
var test_author = document.getElementById('manga_authorname')
var test_chapter = document.getElementById('chapter_list')
var md_group = 'feb1515b-6678-4ea0-bed4-fbb1c171a240'

function md_data_get() {
        let input_value = document.getElementById("searchbox").value;
        if (input_value == ""){
                var md_data = '6bf844c8-2ce4-401a-a761-3151042efe30'
        }
        else{
                var md_data = input_value
        }
	fetch(`${baseUrl}/manga/${md_data}`, {
			method: 'GET',
			mode: 'cors',
			headers: {}
		})
		.then(Response => {
			if (!Response.ok) {
				throw new Error('no');
			}
			return Response.json();
		})
		.then(data => {
			const test = data.data.attributes.title.en;
			const test2 = data.data.attributes.description.en;
			const img = data.data.relationships.find(t => t.type === 'cover_art').id;
			/*console.log(img);*/
			const author = data.data.relationships.find(t => t.type == 'author').id;
			const artist = data.data.relationships.find(t => t.type == 'artist').id;
			/*console.log(test);*/
			const cover_img = fetch(`${baseUrl}/cover/${img}`, {
				mode: 'cors',
				headers: {
					'Sec-Fetch-Site': 'same-origin',
				}
			}).then(Response => Response.json()).then(data => {
				const coverid = data.data.attributes.fileName;
				var coverlink = `${coverUrl}/covers/${md_data}/${coverid}`
				test_img.setAttribute('src', coverlink);
				document.body.style.background = `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),url('${coverlink}')`
			})

			function author_info() {
				return fetch(`${baseUrl}/author/${author}`, {
					mode: 'cors',
					headers: {
						'Sec-Fetch-Site': 'same-origin',
					}
				}).then(Response => Response.json()).then(data => {
					return data.data.attributes.name;
				});
			}

			function artist_info() {
				return fetch(`${baseUrl}/author/${artist}`, {
					mode: 'cors',
					headers: {
						'Sec-Fetch-Site': 'same-origin',
					}
				}).then(Response => Response.json()).then(data => {
					return data.data.attributes.name;
				});
			}

                        function chapter_list(){
                                return fetch(`${baseUrl}/chapter?groups[]=${md_group}&manga=${md_data}`,{
                                        mode: 'cors'
                                }).then(Response => Response.json()).then(data => {
                                        return data;
                                })
                        }

                        Promise.all([chapter_list()]).then(([chapter_list])=>{
                                /*console.log(chapter_list.data)*/
                                if (test_chapter.childElementCount !== 0){
                                                test_chapter.textContent = ""
                                                /*console.log('Deleted')
                                                console.log(test_chapter.childElementCount)*/
                                }
                                if (test_chapter.childElementCount == 0){
                                        for (var i = 0; i < chapter_list.data.length; i++){
                                                var button_chapter = document.createElement('button')
                                                Object.assign(button_chapter, {
                                                        innerHTML: 'Chapter ' + chapter_list.data[i].attributes.chapter,
                                                        id: 'chapter_button'
                                                })
                                                test_chapter.append(button_chapter)
                                                button_chapter.setAttribute('onclick','location.href='+`"${mdUrl}/chapter/${chapter_list.data[i].id}"`)
                                                /*console.log('Created')
                                            	console.log(test_chapter.childElementCount)*/
                                        }
                                }
                        })

			Promise.all([author_info(), artist_info()]).then(([author_name, artist_name]) => {
				if (author_name === artist_name) {
					test_author.innerHTML = author_name;
				} else {
					test_author.innerHTML = `${author_name}, ${artist_name}`;
				}
			});

			test_output.innerHTML = test;
			test_output2.innerHTML = test2;
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

function search() {
	window.onload = function() {
		document.getElementById('searchbox').addEventListener("keyup", function(event) {
			if (event.code == 'Enter') {
				md_data_get();
			};
		})
	}
};