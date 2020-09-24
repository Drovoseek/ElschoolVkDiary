import React from "react";
import Icon24Videocam from "@vkontakte/icons/dist/24/videocam";

class DiaryLesson extends React.Component {
    constructor(props) {
        super(props);
    }

    getMarkBlockColor(mark) {
        var color = "";
        if (mark.indexOf("/") > 0) {
            color = "linear-gradient(90deg, ";
            var mark1 = mark.substring(0, mark.indexOf("/"));
            var mark2 = mark.substring(mark.indexOf("/") + 1);
            color += this.getMarkColor(mark1) + "," + this.getMarkColor(mark2);
            color += ")";
        } else {
            color = this.getMarkColor(mark);
        }
        return color;
    }

    getMarkColor(mark) {
        mark = parseInt(mark);
        switch (mark) {
            case 1:
                return "#ffb6c1";
            case 2:
                return "#ffb6c1";
            case 3:
                return "#f0e68c";
            case 4:
                return "#87ceeb";
            case 5:
                return "#98fb98";
            default:
                return "#d3d3d3";
        }
    }

    formatStages = stages => {
        var stagesText = [];
        stagesText.push(<span>{stages.substring(0, stages.indexOf('"materials_json_format'))}</span>);
        stages = stages.substring(stages.indexOf('"materials_json_format":[') + 26, stages.length - 2);
        stages = stages.split("},{");
        stages.map(stage => {
            var text = stage.substring(8, stage.indexOf('","link"'));
            var url = stage.substring(stage.indexOf('"link"') + 8, stage.length - 1);
            stagesText.push(
                <div>
                    {text}: <a href={url}>{url}</a>
                </div>
            );
        });
        return stagesText;
    };

    render() {
        const lesson = this.props.lesson;
        return (
            <div className="lesson d-flex">
                <div className="lesson__timeline"></div>
                <div className="lesson__times d-flex flex-column">
                    <div className="lesson__start">{lesson.start}</div>
                    <div className="lesson__number">{lesson.number}</div>
                    <div className="lesson__end">{lesson.end}</div>
                </div>
                <div className="lesson__card flex-grow-1">
                    <div className="d-flex">
                        <div className="lesson__title flex-grow-1">{lesson.title}</div>
                        {lesson.mark != null && (
                            <div className="lesson__mark-wrapper" style={{ background: this.getMarkBlockColor(lesson.mark) }}>
                                <div className="lesson__mark">{lesson.mark}</div>
                                <div>Оценка</div>
                            </div>
                        )}
                    </div>
                    <div className="d-flex">
                        <div className="lesson__number-room flex-grow-1">
                            {lesson.number} урок, каб. {lesson.room}
                        </div>
                        <div className="lesson__kind">{lesson.kind}</div>
                    </div>
                    {lesson.videoconfTime != null && (
                        <div className="lesson__videoconf d-flex">
                            <Icon24Videocam />
                            <div style={{ margin: "4px 0 0 5px" }}>Видеоурок в {lesson.videoconfTime}</div>
                        </div>
                    )}
                    {lesson.stages != null && <div className="lesson__stages">{this.formatStages(lesson.stages)}</div>}
                    <div className="lesson__homework">{lesson.homework}</div>
                    {lesson.yaklass ? <div className="lesson__yaklass">Нужно пройти тест ЯКласс</div> : null}
                </div>
            </div>
        );
    }
}

export default DiaryLesson;
