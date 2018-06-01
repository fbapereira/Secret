import { Component } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import * as speech from '@google-cloud/speech';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['search.component.scss']
})

export class SearchComponent {
  isSearchButtonVisible = false;
  stream: any;
  recordRTC: any;

  constructor(private oHttpClient: HttpClient) { }

  changeView(): void {
    this.isSearchButtonVisible = !this.isSearchButtonVisible;
  }

  //   public startRecording() {
  //     const mediaConstraints = {
  //       audio: true
  //     };
  //     navigator.mediaDevices
  //       .getUserMedia(mediaConstraints)
  //       .then(this.successCallback.bind(this));
  //   }


  //   public stopRecording() {
  //     let recordRTC = this.recordRTC;
  //     recordRTC.stopRecording();
  //     let stream = this.stream;
  //     stream.getAudioTracks().forEach(track => track.stop());
  //     debugger;
  //     let objetoURL = window.URL.createObjectURL(stream);

  //     var reader = new FileReader();
  //     reader.readAsDataURL(objetoURL);
  //     reader.onloadend = function () {
  //       // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  //       const audio = {
  //         content: reader.result,
  //       };
  //       const config = {
  //         encoding: 'LINEAR16',
  //         sampleRateHertz: 16000,
  //         languageCode: 'en-US',
  //       };
  //       const request = {
  //         audio: audio,
  //         config: config,
  //       };

  //       // Detects speech in the audio file
  //       client
  //         .recognize(request)
  //         .then(data => {
  //           const response = data[0];
  //           const transcription = response.results
  //             .map(result => result.alternatives[0].transcript)
  //             .join('\n');
  //           console.log(`Transcription: ${transcription}`);
  //         })
  //         .catch(err => {
  //           console.error('ERROR:', err);
  //         });
  //     }
  //   }



  //   successCallback(stream: MediaStream) {
  //     debugger;
  //     var options = {};
  //     this.stream = stream;
  //     this.recordRTC = RecordRTC(stream, options);
  //     this.recordRTC.startRecording();
  //   }
}
