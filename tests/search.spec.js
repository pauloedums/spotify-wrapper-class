import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Search', () => {
  let spotify;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  })

  afterEach(() => {
    fetchedStub.restore();
  })
  describe('smoke tests', () => {
    // search (genérico)   + de 1 tipo
    // searchAlbums
    // searchArtists
    // searchTracks
    // searchPlaylists

    it('should exist the search method', () => {
      expect(spotify.search.albums).to.exist;
    });


    it('should exist the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('should exist the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('should exist the searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

    });
  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')

      const albums2 = spotify.search.albums('Muse');
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')

    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=tracks')

      const tracks2 = spotify.search.tracks('Muse');
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/search?q=Muse&type=tracks')

    });
  });

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const playlists2 = spotify.search.playlists('Muse');
      expect(fetchedStub).to.have.been
      .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')

    });
  });
});
