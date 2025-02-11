import React from 'react';
import {editDeck, getDecks} from "../../actions/deck_actions";
import {connect} from "react-redux";
import {getActiveDeck} from "../../actions/active_deck_actions";
import {logout} from "../../actions/session_actions";
import NavBar from "../navbar/navbar";
import SearchBar from "./SearchBar";
import {fetchAllDecks} from "../../util/deck_api_util";
import {changeEditDeckVisibility} from "../../actions/ui_actions";
import {Link} from "react-router-dom";

class Subjects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            decks: {}
        }
    }

    componentDidMount() {
        fetchAllDecks().then(decks => {
            this.setState({decks: decks})
        })
    }

    render() {
        return (
            <div className="main-page">
                <NavBar />
                <SearchBar />
                <div className="page-content">
                    <div className="header-container">
                        <div className="page-heading">
                            <div className="heading-title">Knowledge Genome
                                <div className="heading-description">Brainscape Certified</div>
                            </div>
                            <div className="heading-subtitle">Browse over 1 million flashcard classes created by top students,
                                professors, publishers, and experts, spanning the world's body of "learnable" knowledge.
                            </div>
                        </div>
                    </div>
                    <div className="page-main">
                        <ul className="subject-list">
                            {Object.values(this.state.decks).map(deck => <li key={deck.id} className="tag-subject">
                                <Link to={`/practice/${deck.id}`} className="subject-link">
                                    {deck.title}
                                </Link>
                            </li>)}
                            {/*<li className="tag-category">About Alisa</li>*/}
                            {/*<li className="tag-subject">*/}
                            {/*    <a className="subject-link" href="#">Alisa's link</a>*/}
                            {/*</li>*/}
                        </ul>
                        <a target='_blank' href="https://alisacheadle.com" className="main-page-subheading">About Flashcards on BrainFlayer</a>
                        <div className="about-box">
                            <div className="about-heading">Introducing the Knowledge Genome</div>
                            <p className="description-text">The Knowledge Genome Project is the initiative to catalog
                                the world's entire body of "learnable" knowledge into its most fundamental Q&A pairs.
                                We have aimed to make information accessible in this format so that Brainscape's
                                adaptive learning engine can use it to help anyone learn anything as fast and
                                efficiently as humanly possible.</p>
                            <p className="description-text">The flashcards in this Knowledge Genome are distributed as
                                complete "Classes". A student, teacher, professor, or publisher can easily create a
                                Class and divide it into various Decks of flashcards.</p>
                            <p className="description-text">Every night, our software analyzes all new Classes that
                                have been created across the globe, and classifies them into one or more "tag" areas.
                                For example, a Class's parent tag might be "Science", and the child tag might be
                                "Anatomy". Clicking down the tree to "Anatomy" will show you all of the top-rated
                                Classes related to that topic, which you can easily browse and study depending on
                                which one meets your particular learning needs.</p>
                            <div className="about-heading">How are the Tags Organized?</div>
                            <p className="description-text">If you still can't find what you’re looking for, you can always
                                make your own flashcards using our easy web-based content authoring system. Not only will
                                you then be able to study custom content using Brainscape's unique Confidence-Based
                                Repetition study system, but you will also be able to contribute your flashcards to the
                                overall Knowledge Genome, to be used by other learners around the world (unless you decide
                                to make them private).</p>
                            <p className="description-text">However you collect your flashcards, you can always study them
                                based on Brainscape’s scientifically proven study algorithm, helping you to learn faster,
                                remember for longer, and free up those hours for other more important things in your
                                life.</p>
                            <div className="about-heading">Learn Faster with Cognitive Science</div>
                            <p className="description-text">Brainscape's magic is based on a new learning system we
                                created called Confidence-Based Repetition (CBR). CBR is a modified version of spaced
                                repetition that optimizes your learning by automatically determining how your study time
                                is allocated.</p>
                            <p className="description-text">There are three main steps in the ongoing CBR cycle.</p>
                            <p className="description-text">First, Active Recall. Rather than simply "recognizing" the
                                correct answer from a series of multiple choices, Brainscape (or really any flashcards)
                                force you to recall the fact from scratch, thereby strengthening the neuron connections
                                that your brain uses to encode that information.</p>
                            <p className="description-text">The second step is Metacognition. As soon as you manually
                                reveal the answer to a given flashcard, Brainscape asks you to rate, on a 1-5 scale,
                                how well you think you knew the material. This act of self-assessment further deepens
                                your new neuron connections.</p>
                            <p className="description-text">Finally, the Spaced Repetition component. Brainscape uses
                                your self-reported confidence rating to determine exactly how frequently to show you
                                the flashcard, with low-confidence items repeated more often until you increase your
                                confidence rating.</p>
                            <p className="description-text">According to cognitive science research, the best time to
                                review a concept is the longest amount of time before which you would have otherwise
                                forgotten it. Brainscape ensures that you are repeating concepts within as close to
                                this interval as possible, thus ensuring you don't waste time studying what you already
                                know (or what you have already fully forgotten).</p>
                            <p className="description-text">If you continue to use Brainscape, your hippocampus will get
                                better and better at building & strengthening the neuron connections in your prefrontal
                                cortex, thus improving how quickly and permanently your brain encodes long-term
                                memories.</p>
                            <p className="description-text">So get started with Brainscape today! And check out the
                            <b> Brainscape Academy for thousands more tips on how to optimize your learning.</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-main">
                        <ul className="footer-columns">
                            <li className="column">
                                <h6 className="footer-item-heading">
                                    Key Links
                                </h6>
                                <ul className="tooltip footer-items-list">
                                    <span className="hovertext">Links here just for styling!</span>
                                    <li className="footer-item">Pricing</li>
                                    <li className="footer-item">Corporate Training</li>
                                    <li className="footer-item">Teachers & Schools</li>
                                    <li className="footer-item">iOS App</li>
                                    <li className="footer-item">Android App</li>
                                    <li className="footer-item">Help Center</li>
                                </ul>
                            </li>
                            <li className="column">
                                <h6 className="footer-item-heading">
                                    Subjects
                                </h6>
                                <ul className="tooltip footer-items-list">
                                    <span className="hovertext">Links here just for styling!</span>
                                    <li className="footer-item">Medical & Nursing</li>
                                    <li className="footer-item">Law Education</li>
                                    <li className="footer-item">Foreign Languages</li>
                                    <li className="footer-item">All Subjects A-Z</li>
                                    <li className="footer-item icon">All Certified Classes</li>
                                </ul>
                            </li>
                            <li className="column">
                                <h6 className="footer-item-heading">
                                    Company
                                </h6>
                                <ul className="tooltip footer-items-list">
                                    <span className="hovertext">Links here just for styling!</span>
                                    <li className="footer-item">About Us</li>
                                    <li className="footer-item">Earn Money!</li>
                                    <li className="footer-item">Academy</li>
                                    <li className="footer-item">Contact</li>
                                </ul>
                            </li>
                            <li className="column">
                                <h6 className="footer-item-heading">
                                    Find Me!
                                </h6>
                                <ul className="footer-items-list">
                                    <li><a target='_blank' href="https://github.com/alisa1649" className="github-link"> </a></li>
                                    <li><a target='_blank' href="https://alisacheadle.com" className="portfolio-link"> </a></li>
                                    <li><a target='_blank' href="https://www.linkedin.com/in/alisa-cheadle-04a7811a7/" className="linkedin-link"> </a></li>
                                    <li><a target='_blank' href="http://www.alisacheadle.com/images/gallery/Alisa_Cheadle_Resume.pdf" className="resume-link"> </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-info-text">
                        Brainflayer is a web study platform that helps you learn about Alisa and why she would be an asset to your organization!
                        {/*Our mission is to create a smarter world by simplifying and accelerating the learning process.*/}
                        {/*© 2021 Bold Learning Solutions.*/}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.activeDeck.deck ? state.activeDeck.deck.title : "",
        tags: state.activeDeck.deck ? state.activeDeck.deck.tags : ""
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDeck: (deckId) => {
            return dispatch(getActiveDeck(deckId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);