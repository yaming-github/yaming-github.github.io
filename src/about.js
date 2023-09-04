import PDF from './cv.pdf'

export function About() {
    return (
        <div>
            <object data={PDF} type="application/pdf" style={{width: "100%", height: "100vh"}}>
                <p>Unable to display PDF file. <a
                    href="https://drive.google.com/file/d/1EbfzUwuzNMDlz7OeNuQkfDl8JrKRt0Oz/view?usp=sharing">Download</a> instead.
                </p>
            </object>
        </div>
    );
}
