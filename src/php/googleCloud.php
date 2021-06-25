<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

/* phpinfo();
die(); */

putenv('GOOGLE_APPLICATION_CREDENTIALS=./cybernetic-pact-317400-d0fda7da1788.json');

require 'vendor/autoload.php';

use Google\Cloud\Speech\V1\RecognitionAudio;
use Google\Cloud\Speech\V1\RecognitionConfig;
use Google\Cloud\Speech\V1\RecognitionConfig\AudioEncoding;
use Google\Cloud\Speech\V1\SpeechClient;

/** Uncomment and populate these variables in your code */
$audioFile = './449481__12125065__hello.mp3';

$audioInfo = getAudiofileInfo($audioFile);

// the settings below MUST match the audio file
$encoding = AudioEncoding::ENCODING_UNSPECIFIED;
$sampleRateHertz = $audioInfo['sampleRate'];
$languageCode = 'en-US';
$audioChannelCount = $audioInfo['channels'];

// get contents of a file into a string
$content = file_get_contents($audioFile);

// set string as audio content
$audio = (new RecognitionAudio())
    ->setContent($content);

// set config
$config = (new RecognitionConfig())
    ->setEncoding($encoding)
    ->setSampleRateHertz($sampleRateHertz)
    ->setLanguageCode($languageCode)
    ->setAudioChannelCount($audioChannelCount);

// create the speech client
$client = new SpeechClient();

// create the asyncronous recognize operation
$operation = $client->longRunningRecognize($config, $audio);
$operation->pollUntilComplete();

if ($operation->operationSucceeded()) {
    $response = $operation->getResult();

    // each result is for a consecutive portion of the audio. iterate
    // through them to get the transcripts for the entire audio file.
    foreach ($response->getResults() as $result) {
        $alternatives = $result->getAlternatives();
        $mostLikely = $alternatives[0];
        $transcript = $mostLikely->getTranscript();
        $confidence = $mostLikely->getConfidence();
        printf('Transcript: %s' . PHP_EOL, $transcript);
        printf('Confidence: %s' . PHP_EOL, $confidence);
    }
} else {
    print_r($operation->getError());
}

$client->close();

function getAudiofileInfo($audioFile)
{
    // include getID3() library (can be in a different directory if full path is specified)
    require_once './getid3/getid3.php';

// Initialize getID3 engine
    $getID3 = new getID3;

// Analyze file and store returned data in $ThisFileInfo
    $info = $getID3->analyze($audioFile);
    $info = isset($info['audio']['streams'][0]) ? $info['audio']['streams'][0] : [];
    $sampleRate = isset($info['sample_rate']) ? $info['sample_rate'] : 44100;
    $channels = isset($info['channels']) ? $info['channels'] : 2;

    return array(
        'sampleRate' => $sampleRate,
        'channels' => $channels,
    );
/*
Optional: copies data from all subarrays of [tags] into [comments] so
metadata is all available in one location for all tag formats
metainformation is always available under [tags] even if this is not called
 */
    // $getID3->CopyTagsToComments($ThisFileInfo);

/*
Output desired information in whatever format you want
Note: all entries in [comments] or [tags] are arrays of strings
See structure.txt for information on what information is available where
or check out the output of /demos/demo.browse.php for a particular file
to see the full detail of what information is returned where in the array
Note: all array keys may not always exist, you may want to check with isset()
or empty() before deciding what to output
 */

//echo $ThisFileInfo['comments_html']['artist'][0]; // artist from any/all available tag formats
    //echo $ThisFileInfo['tags']['id3v2']['title'][0];  // title from ID3v2
    //echo $ThisFileInfo['audio']['bitrate'];           // audio bitrate
    //echo $ThisFileInfo['playtime_string'];            // playtime in minutes:seconds, formatted string

/* if you want to see all the tag data (from all tag formats), uncomment this line: */
//echo '<pre>'.htmlentities(print_r($ThisFileInfo['comments'], true), ENT_SUBSTITUTE).'</pre>';

/* if you want to see ALL the output, uncomment this line: */
//echo '<pre>'.htmlentities(print_r($ThisFileInfo, true), ENT_SUBSTITUTE).'</pre>';

}