import { get } from "./base";

export function processSongs(songs) {
  if (!songs.length) {
    return Promise.resolve(songs);
  }

  return get("/api/getSongsUrl", {
    mid: songs.map((song) => {
      return song.mid;
    }),
  }).then((result) => {
    const map = result.map;
    return songs
      .map((song) => {
        song.url = map[song.mid];
        return song;
      })
      .filter((song) => {
        // return song.url && song.url.indexOf("vkey") > -1;
        // 接口已坏，没有数据
        song.url = "http://127.0.0.1:5501/static/music/01.mp3";
        song.duration = "251";
        return song;
      });
  });
}

const lyricMap = {};

export function getLyric(song) {
  if (song.lyric) {
    return Promise.resolve(song.lyric);
  }
  const mid = song.mid;
  const lyric = lyricMap[mid];
  if (lyric) {
    return Promise.resolve(lyric);
  }

  return get("/api/getLyric", {
    mid,
  }).then((result) => {
    const lyric = result
      ? result.lyric
      : "[00:00:00]该歌曲歌词暂时无法获取歌词";
    lyricMap[mid] = lyric;
    return lyric;
  });
}
