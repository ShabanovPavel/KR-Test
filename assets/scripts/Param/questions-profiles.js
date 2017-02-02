import {PersonalityType as type} from './personality-type';
const params=[
	{
        questions:"Вы любите разнообразие и активную деятельность?", //1
        yes:type.E,
        no:type.I,
    },
	{
        questions:"Вы предпочитаете работать в тишине и покое?", //,1
        yes:type.I,
        no:type.E,
    },
    {
        questions:"Вы способны терпиливо работать над долговременными\n проектами?", //2,2
        yes:type.I,
        no:type.E,
    },
	{
        questions:"Вы интерисуетесь работой окружающих?", //3
        yes:type.E,
        no:type.I,
    },
	{
        questions:"Вы интерисуетесь фактами и идеями, лежащими\n в основе работы?", //,3
        yes:type.I,
        no:type.E,
    },
	{
        questions:"Вы предпочитаете обдумывать свои действия,\n перед тем как действовать?", //4,4
        yes:type.I,
        no:type.E,
    },
	{
        questions:"Вам мешают телефонные звонки во время работы?", //5,5
        yes:type.I,
        no:type.E,
    },
	{
        questions:"Большая часть идей приходит к вам в процессе\n обсуждения?", //6
        yes:type.E,
        no:type.I,
    },
	{
        questions:"Блоьшая часть идей приходит к вам в процессе\n самостоятельных размышлений?", //,6
        yes:type.I,
        no:type.E,
    },
	{
        questions:"Вы предпочитаете работать в окружении людей?", //7,7
        yes:type.E,
        no:type.I,
    },
	{
        questions:"Вы интерисуетесь окружающими вас людьми?", //8
        yes:type.E,
        no:type.I,
    },
	{
        questions:"Вы испытываете трудности в запоминании лиц\n и имен людей?", //,8
        yes:type.I,
        no:type.E,
    },
	{
        questions:"Вы предпочитаете устное общение больше\n чем письменное?", //9,9
        yes:type.E,
        no:type.I,
    },
	{
        questions:"Вы предпочитаете учиться\n в процессе общения с коллегами?", //10
        yes:type.E,
        no:type.I,
    },
	{
        questions:"Вы предпочитаете учиться путем чтения литературы?", //,10
        yes:type.I,
        no:type.E,
    },
    {
        questions:"Вы предпочитаете решать проблемы,\n используя прошлый опыт и стандартные подходы?", //1
        yes:type.S,
        no:type.N,
    },
	{
        questions:"Вы предпочитаете решать новые, сложные проблемы,\n не имеющие доптупных стандартных решений?", //,1
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы больше любите осваивать новые навыки и знания,\n чем применять их?", //2,2
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы склонны доверять своей интуиции?", //3,3
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы любите работу с творческим уклоном?", //,4
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы часто ошибаетесь в фактах?", //4
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы любите работу с практическим уклоном?", //4
        yes:type.S,
        no:type.N,
    },
	{
        questions:"Говоря о работе,\n вы сначала сообщаете конкретные детали?", //5,5
        yes:type.S,
        no:type.N,
    },
	{
        questions:"Вы любите изменения в своей работе?", //,6
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы предпочитаете работать\n традиционным для себя способом,\n оттачивая свое мастерство?", //6
        yes:type.S,
        no:type.N,
    },
	{
        questions:"Вы, как правило, действуете по настроению,\n в соответствии с приливами сил?", //,7
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы обычно действуете методично,\n продвигаясь шаг за шагом к цели?", //7
        yes:type.S,
        no:type.N,
    },
	{
        questions:"В процессе работы вы обращаете внимание\n на специфику каждой ситуации?", //8
        yes:type.S,
        no:type.N,
    },
	{
        questions:"В процессе работы вы обращаете внимание\n на новые возможности\n и интересные проблемы, ?", //,8
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы склонны, в процессе работы,\n усложнять решение проблемы?", //9,9
        yes:type.N,
        no:type.S,
    },
	{
        questions:"Вы задаетесь вопросом о причинах ситуаций,\n складывающихся в процессе работы?", //10,10
        yes:type.N,
        no:type.S,
    },
    {
        questions:"Вы больше опираетесь на логический анализ,\n чем на ценностные суждения?", //1,1
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы лучше всего работаете\n при гармоничных отношениях с окружающими?", //2,2
        yes:type.F,
        no:type.T,
    },
	{
        questions:"Часто ли вы непреднамеренно задеваете чувтва людей?", //3
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы любите делать людям приятное, даже по мелочам?", //,3
        yes:type.F,
        no:type.T,
    },
	{
        questions:"При принятии решений вы стараетесь учитывать\n все симпатии и антипатии, как свои,\n так и окружающих?", //,4
        yes:type.F,
        no:type.T,
    },
	{
        questions:"Вы склонны принимать решения на безличной основе,\n иногда уделяя недостаточно внимания желаниям людей?", //4
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Обычно вы трезво мыслите и, при необходимости,\n критикуют других?", //5
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы склонны сочувствовать другим\n и не любите говорить людям\n неприятные вещи?", //,5
        yes:type.F,
        no:type.T,
    },
	{
        questions:"Вы обращаете внимание на закономерности,\n проявляющиеся в ситуации?", //6
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы обращаете внимание на человеческие ценности,\n проявляющиеся в ситуации?", //,6
        yes:type.F,
        no:type.T,
    },
	{
        questions:"Вы чувствуете себя вознагражденными,\n когда работа сделана хорошо?",
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы лучше откликаетесь на идеи окружающих,\n чем на их чувства?", //8,8
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы обладаете способностями анализа проблем\n или ситуаций?", //9
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы обладаете способностями понимания интересов людей\n в разных ситуациях?", //,9
        yes:type.F,
        no:type.T,
    },
	{
        questions:"Вы хорошо предвидите логические последствия \nпринятых решений?", //10
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы хорошо предвидите влияние\n принятых решений на людей?", //,10
        yes:type.F,
        no:type.T,
    },
	{
        questions:"Вы предпочитаете справедливую оценку ваших заслуг?", //11
        yes:type.T,
        no:type.F,
    },
	{
        questions:"Вы периодически нуждаетесь в похвале\n и признании за ваши заслуги?", //,11
        yes:type.F,
        no:type.T,
    },
    {
        questions:"В процессе работы вы больше предпочитаете гибкость,\n чем возможность планировать и придерживаться планов?", //1,1
        yes:type.P,
        no:type.J,
    },
	{
        questions:"Вы предпочитаете оставлять работу незавершенной,\n чтобы иметь возможность вносить изменения?", //2,2
        yes:type.P,
        no:type.J,
    },
	{
        questions:"Вы считаете себя любознательным?", //,4
        yes:type.P,
        no:type.J,
    },
	{
        questions:"Вы часто откладываете решения,\n пытаясь найти новые альтернативы и данные?", //,5
        yes:type.P,
        no:type.J,
    },
	{
        questions:"Вы часто начинаете несколько дел сразу,\n с трудом завершая их в итоге?", //,6
        yes:type.P,
        no:type.J,
    },
	{
        questions:"Вы часто начинаете несколько дел сразу,\n с трудом завершая их в итоге?", //,6
        yes:type.P,
        no:type.J,
    },
	{
        questions:"Вы хорошо приспосабливаетесь к изменяющейся ситуации?", //,7
        yes:type.P,
        no:type.J,
    },
	{
        questions:"Вы часто оставляете много дел на последний момент,\n завершая их вплотную к крайнему сроку?", //10,10
        yes:type.P,
        no:type.J,
    },
	{
        questions:"Приступая к новой работе,\n вы предпочитаете узнавать\n только существенные моменты задачи?", //8
        yes:type.J,
        no:type.P,
    },
	{
        questions:"Вы любите планировать свое время?",
        yes:type.J,
        no:type.P,
    },
	{
        questions:"Вы не любите отрываться от работы\n для более срочного дела?",
        yes:type.J,
        no:type.P,
    },
];

export {params as Questions};