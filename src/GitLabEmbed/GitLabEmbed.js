import React from 'react';
import {nanoid} from "nanoid";

const GitLabEmbed = ({url}) => {
    let id = nanoid()

    const _checkURL = () => {
        //const { url } = url;///////////////////
        const mask = /^https:\/\/gitlab\.com\/(.*)\/([0-9a-z]*)/;
        const match = url.match(mask);

        if (!match || match.length < 3) {
            throw new Error(`Invalid url: ${url}`);
        } else {
            return `${url}`;
        }

    }

    const _updateFrame = (iframe) => {
        //const id = Id;////////////////////////
        //const iframe = iframeRef;///////////////////////

        let doc = iframe.document;
        if (iframe.contentDocument) doc = iframe.contentDocument;
        else if (iframe.contentWindow) doc = iframe.contentWindow.document;
        let iframeHtml;
        try {
            const snippetLink = _checkURL()
            const snippetScript = `<script type="text/javascript" src="${snippetLink}.js"></script>`;
            const styles = '<style>*{font-size:12px;}</style>';
            const elementId = `snippet-${id}`;
            const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
            iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${snippetScript}</body></html>`;
        }
        catch (err) {
            iframeHtml = `<div class="error" style="color: red">Ссылка не валидна</div>`;
        }
        doc.open();
        doc.writeln(iframeHtml);
        doc.close();

    }

    return (
        <>
            <iframe
                ref={(n) => { _updateFrame(n); }}
                width="100%"
                frameBorder={0}
                id={`snippet-${id}`}
            />
            <style>{`
                iframe {
                    height: 40px;
                }
            `}</style>
        </>

    );
};

export default GitLabEmbed;