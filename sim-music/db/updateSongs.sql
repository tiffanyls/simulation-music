UPDATE songs 
set song = $1,
artist = $2,
album = $3
WHERE id=$4;