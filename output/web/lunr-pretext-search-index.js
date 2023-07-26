var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   smakdonald.github   https:\/\/smakdonald.github.io\/index.html   copyright  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The content of this text is heavily based on the 817-818 sequence of courses offered in UNL, specificlly those taught during the 2021 and 2022 academic years. As such the content and structure have been heavily based on the notes of the following faculty:    Eloísa Grifo      Alexandra Seceleanu      Mark Walker Mark has somehow managed to be the only member of the mathematics faculty to not have so much as a single page on the UNL website. Luckily, there are workarounds.    I am very thankful to Eloísa, Alexandra, and Mark for sharing their .tex files with me, despite the fact that they had no idea what I would be doing with them. Fittingly, I would also like to acknowledge Eloísa for having an acknowledgement section in her lecture notes, yielding a template for my own.  And, as always, I reserve a speical thank you for Erin McNicholas and Inga Johnson for forever tinting the world of mathematics purple.  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book (*)",
  "body": "How to Use This Book (*)  I'm still in the process of figuring out exactly what this is for. Some possibilities include:   Future lecture notes for the hopeful possibility that one day I will teach a course over this material.    Current notes for students taking the first year algebra sequence.    Assistance in studying for the Algebra Qualifying Exam at UNL.    Clout.     Blocks  Here are the types of environments you are likely to encounter throughout the text and what they are used for.  Definition  These are pretty standard and probably what you'd be expecting. The building blocks of what we'll be working with.   Examples  Specific instances of a definition. For example, the empty set, is an example of a set, and thus would be contained within an example environment. At some point the line between example and definition becomes incoherently blurred, but I have done my best to keep things consistent.   Theorem  A result.   Lemma  A more technical result used specifically in the proof of a larger result.   Corollary  An important result whose proof comes directly from a previous theorem.   Proposition  Results that require proof but are more specific and\/or contained in a larger result coming later.   Exploration  Generalizations, specifics, smaller results, things are are less essential to the course or results who's proofs are usually skipped.   Problem  Used for qualifying exam problems.   Remark  Providing context in the form of foreshadowing or content not covered in this text. In general, there shouldn't be anything defined in a remark, they should be entirely optional.   Convention     Discussion  Usually for arguing about notation.   Footnotes  Sometimes act like remarks. However, most are strictly for fun and add little to no educational value, at least in the traditional sense. It should really be feetnote if you think about it.       "
},
{
  "id": "p-11",
  "level": "2",
  "url": "preface-1.html#p-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Examples Theorem Lemma Corollary Proposition Exploration Problem Remark Convention Discussion Footnotes "
},
{
  "id": "preface-2",
  "level": "1",
  "url": "preface-2.html",
  "type": "Preface",
  "number": "",
  "title": "Guide to Proof Writing",
  "body": "Guide to Proof Writing     Never use the words \"obvious\", \"clearly\", \"trivial\", \"of course\", or synonyms of these.    Write words rather than symbols or abbreviations - a long string of symbols isn't as readable as an English sentence. Specifically: For all proofs you hand in, write out \"for all\", \"there is\", \"implies\", \"if and only if\", \"therefore\", \"because\", \"such that\", \"for example\". (That is, the symbols ∀, ∃, ⇒, ⇔, ∴, ∵, and s.t., should be avoided.)    Every time you apply a definition, theorem, proposition, lemma, corollary, exercise, etc., in a proof that you are writing up, reference it. Reference a theorem, lemma, or proposition by its number in the text; reference a definition as \"the definition of ___\" (or by its number in the text).    Write sentences and paragraphs, and use correct grammar and punctuation. (For example, every sentence should end with a period.)    Follow the standard mathematical conventions for notation.    Define every new variable letter at the first point it appears in your proof.    The first sentence of a proof should suppose the hypotheses, and the last sentence of a proof should conclude the conclusion.     "
},
{
  "id": "sec-classical-affine",
  "level": "1",
  "url": "sec-classical-affine.html",
  "type": "Section",
  "number": "1.1",
  "title": "Classical Affine Varieties",
  "body": "Classical Affine Varieties  Throughout this class, will always denote a field and we will often assume that is an algebraically closed field. It will rarely cause problems to assume , in fact.    For an arbitrary field , affine -space over , written , is the set of -tuples of elements of :     So, is just , but we avoid using the latter since is the usual notation of the standard -dimensional -vector space. Affine space is not thought of as a vector space typically.    Recall is the ring of all polynomials in the variables having coefficients. For any subset of , the zero locus of , written , is the subset of giving the common zeroes of all the members of ; that is,      When we need to indicate the ground field, we write for . Also, given a finite list , by we mean .     A classical affine variety is a subset of , for some , that is equal to for some subset of .     Draw (when ). (Yes, I realize is not algebraically closed; one instance in which we drop this assumption is when we wish to draw a variety.)    Let . Prove is an affine variety.    Let . Prove is not an affine variety.     Any singleton is an affine variety, since it is the zero locus of the set .     Prove that any finite set of points of for any is an affine variety.    Is a countably infinite set of points in an affine variety?    Thinking of as a vector space for once, prove that every linear subspace is an affine variety. More generally, show every translate of a linear subspace is an affine variety.    Show is not an affine variety whenever is an infinite field. (We will eventually define the more general notion of a variety , and we will see that this is a (non-affine) variety.) Is this true when is a finite field?   For a subset of , let denote the ideal of this ring generated by ; that is, For any ideal , we let , the radical of . The radical of an ideal is again an ideal.    For any subset of we have In particular, for any ideal .    The containments hold since . Say . An arbitrary element of has the form with and for all . We have . This proves . Given any ideal , if and is such that , then and hence . This proves .    Thanks to this proposition, we can redifine an affine variety to be a subset of the form where is an ideal (or even a radical ideal).  Here are some easy-to-prove properties of the rule sending ideals to varieties.    For any fixed :   If then .    If then where is the ideal generated by all products of elements of the form with and . In particular, the union of a pair of affine varieties in is again an affine variety.    If is any collection of ideals of , then where is the smallest ideal containing for all . In particular, an arbitrary intersection of affine varieties in is again an affine variety.     . In particular, is an affine variety.     . In particular, the empty set is an affine variety.       I’ll just prove the second one: If then for all , we have since either or . Thus , where the last equality uses .  Say . Then for any , we have and and thus . This proves .    Recall:    The ring is noetherian. That is, every ideal of it is finitely generated or, equivalently, the collection of all ideals of this ring has the acc.    We won’t prove this Theorem in this class; I assume you’ve seen it before.    For any field , every affine variety in is the zero locus of a finite list of polynomials.    By we may assume for a (radical) ideal . By the HBT we have for some ’s and hence (using the Proposition again) .    So far we have started with ideals (or even just sets) of polynomials and used them to produce ideals. There is a backwards function too:    For and and any subset of , let denote the set of all polynomials that vanish at every point of :       For any subset of , is a radical ideal in .    If and then for all we have and hence . Similarly one shows is closed under addition. Since clearly , is an ideal. If for some , then for all we have and hence . So , and this proves is radical.    The next result is immediate from the definitions:    If and are two subsets of , then:    .    If then .       What would you guess is true about ?   Find a counter-example to the obvious guess that for .   The function takes radical ideals to affine varieties and the function takes affine varieties to radical ideals. Are they mutually inverse?    For any field the following hold:   Given a radical ideal of we have (This holds in fact for any subset  .)    Given an affine variety in we have (For any subset W, we have )       If , then for each we have, by definition, that and hence, again by definition, . Note that this remains valid if is any subset.  For the second one, pick . For any we have, by definition, . Again by definition this means . Thus . Note that this containment holds if is any subset. Now assume is an affine variety. Then for some radical ideal . By the first part we have and hence . Substituting for yields and hence .    Can you find an example where the containment is strict, say for the ring ?  Here is one:   Take and , and note that is a radical ideal since is an irreducible polynomial (why?). We have and so .    It would seem that by symmetry one ought to be able to show holds for any radical ideal in the same manner that we proved for any affine variety , but this does not work as the previous example shows. What goes wrong? The symmetric proof does show that  for any ideal that has the form for some , but it is not true that every radical ideal is of this form for any field. Indeed, for as in the previous example, is a radical ideal and yet for any subset of .   "
},
{
  "id": "def-affine-space",
  "level": "2",
  "url": "sec-classical-affine.html#def-affine-space",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  For an arbitrary field , affine -space over , written , is the set of -tuples of elements of :    "
},
{
  "id": "def-zero-locus",
  "level": "2",
  "url": "sec-classical-affine.html#def-zero-locus",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  Recall is the ring of all polynomials in the variables having coefficients. For any subset of , the zero locus of , written , is the subset of giving the common zeroes of all the members of ; that is,    "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "sec-classical-affine.html#convention-1",
  "type": "Convention",
  "number": "1.1.3",
  "title": "",
  "body": " When we need to indicate the ground field, we write for . Also, given a finite list , by we mean .  "
},
{
  "id": "def-classical-affine-variety",
  "level": "2",
  "url": "sec-classical-affine.html#def-classical-affine-variety",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  A classical affine variety is a subset of , for some , that is equal to for some subset of .   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-classical-affine.html#exercise-1",
  "type": "Exploration",
  "number": "1.1.5",
  "title": "",
  "body": " Draw (when ). (Yes, I realize is not algebraically closed; one instance in which we drop this assumption is when we wish to draw a variety.)  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-classical-affine.html#exercise-2",
  "type": "Exploration",
  "number": "1.1.6",
  "title": "",
  "body": " Let . Prove is an affine variety.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-classical-affine.html#exercise-3",
  "type": "Exploration",
  "number": "1.1.7",
  "title": "",
  "body": " Let . Prove is not an affine variety.  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-classical-affine.html#example-1",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  Any singleton is an affine variety, since it is the zero locus of the set .   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-classical-affine.html#exercise-4",
  "type": "Exploration",
  "number": "1.1.9",
  "title": "",
  "body": " Prove that any finite set of points of for any is an affine variety.  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-classical-affine.html#exercise-5",
  "type": "Exploration",
  "number": "1.1.10",
  "title": "",
  "body": " Is a countably infinite set of points in an affine variety?  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-classical-affine.html#exercise-6",
  "type": "Exploration",
  "number": "1.1.11",
  "title": "",
  "body": " Thinking of as a vector space for once, prove that every linear subspace is an affine variety. More generally, show every translate of a linear subspace is an affine variety.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-classical-affine.html#exercise-7",
  "type": "Exploration",
  "number": "1.1.12",
  "title": "",
  "body": " Show is not an affine variety whenever is an infinite field. (We will eventually define the more general notion of a variety , and we will see that this is a (non-affine) variety.) Is this true when is a finite field?  "
},
{
  "id": "prop-locus-radical",
  "level": "2",
  "url": "sec-classical-affine.html#prop-locus-radical",
  "type": "Proposition",
  "number": "1.1.13",
  "title": "",
  "body": "  For any subset of we have In particular, for any ideal .    The containments hold since . Say . An arbitrary element of has the form with and for all . We have . This proves . Given any ideal , if and is such that , then and hence . This proves .   "
},
{
  "id": "proposition-2",
  "level": "2",
  "url": "sec-classical-affine.html#proposition-2",
  "type": "Proposition",
  "number": "1.1.14",
  "title": "",
  "body": "  For any fixed :   If then .    If then where is the ideal generated by all products of elements of the form with and . In particular, the union of a pair of affine varieties in is again an affine variety.    If is any collection of ideals of , then where is the smallest ideal containing for all . In particular, an arbitrary intersection of affine varieties in is again an affine variety.     . In particular, is an affine variety.     . In particular, the empty set is an affine variety.       I’ll just prove the second one: If then for all , we have since either or . Thus , where the last equality uses .  Say . Then for any , we have and and thus . This proves .   "
},
{
  "id": "thm-hilbert",
  "level": "2",
  "url": "sec-classical-affine.html#thm-hilbert",
  "type": "Theorem",
  "number": "1.1.15",
  "title": "",
  "body": "  The ring is noetherian. That is, every ideal of it is finitely generated or, equivalently, the collection of all ideals of this ring has the acc.   "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "sec-classical-affine.html#corollary-1",
  "type": "Corollary",
  "number": "1.1.16",
  "title": "",
  "body": "  For any field , every affine variety in is the zero locus of a finite list of polynomials.    By we may assume for a (radical) ideal . By the HBT we have for some ’s and hence (using the Proposition again) .   "
},
{
  "id": "def-iw",
  "level": "2",
  "url": "sec-classical-affine.html#def-iw",
  "type": "Definition",
  "number": "1.1.17",
  "title": "",
  "body": "  For and and any subset of , let denote the set of all polynomials that vanish at every point of :    "
},
{
  "id": "proposition-3",
  "level": "2",
  "url": "sec-classical-affine.html#proposition-3",
  "type": "Proposition",
  "number": "1.1.18",
  "title": "",
  "body": "  For any subset of , is a radical ideal in .    If and then for all we have and hence . Similarly one shows is closed under addition. Since clearly , is an ideal. If for some , then for all we have and hence . So , and this proves is radical.   "
},
{
  "id": "proposition-4",
  "level": "2",
  "url": "sec-classical-affine.html#proposition-4",
  "type": "Proposition",
  "number": "1.1.19",
  "title": "",
  "body": "  If and are two subsets of , then:    .    If then .      "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-classical-affine.html#exercise-8",
  "type": "Exploration",
  "number": "1.1.20",
  "title": "",
  "body": " Find a counter-example to the obvious guess that for .  "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "sec-classical-affine.html#proposition-5",
  "type": "Proposition",
  "number": "1.1.21",
  "title": "",
  "body": "  For any field the following hold:   Given a radical ideal of we have (This holds in fact for any subset  .)    Given an affine variety in we have (For any subset W, we have )       If , then for each we have, by definition, that and hence, again by definition, . Note that this remains valid if is any subset.  For the second one, pick . For any we have, by definition, . Again by definition this means . Thus . Note that this containment holds if is any subset. Now assume is an affine variety. Then for some radical ideal . By the first part we have and hence . Substituting for yields and hence .   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-classical-affine.html#example-2",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": " Take and , and note that is a radical ideal since is an irreducible polynomial (why?). We have and so .  "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-classical-affine.html#remark-1",
  "type": "Remark",
  "number": "1.1.23",
  "title": "",
  "body": " It would seem that by symmetry one ought to be able to show holds for any radical ideal in the same manner that we proved for any affine variety , but this does not work as the previous example shows. What goes wrong? The symmetric proof does show that  for any ideal that has the form for some , but it is not true that every radical ideal is of this form for any field. Indeed, for as in the previous example, is a radical ideal and yet for any subset of .  "
},
{
  "id": "sec-nullstellensatz",
  "level": "1",
  "url": "sec-nullstellensatz.html",
  "type": "Section",
  "number": "1.2",
  "title": "Hilbert’s Nullstellensatz",
  "body": "Hilbert’s Nullstellensatz  Henceforth, we will assume is algebraically closed unless otherwise specified.    Let be a commutative ring, an element of , and the multiplicatively closed subset of generated by . There is an isomorphism of -algebras given by       Assume is an algebraically closed. Then for any radical ideal of and any affine variety in .  Thus, there is a order-reversing bijection between the poset (under containment) of all affine varieties in and the poset (under containment) of all radical ideals in .    Let now be any ideal of . We need to show that . Pick ; that is, assume is a polynomial such that for every . It suffices to prove in the quotient ring for some , for this implies .  Let be the ideal of generated by (the image of) and . I claim is the empty set: If then and so . But we also have , which is impossible.  Since , by the Weak Nullstellensatz we must have .  Now, by there is an isomorphism of commutative rings, where . We also have the canonical isomorphism Since , this proves that is the trivial ring, and hence in this ring. Thus in for some . ◻     Prove: If is algebraically closed, then for any set of polynomials we have . In particular, for any ideal . Moreover, if is any subset of , is the unique smallest affine variety in that contains .    Prove that holds for all radical ideals if and only if  is algebraically closed.    The only new\/non-elementary assertion in the Strong Nullstellensatz This can be rephrased as: Suppose is a polynomial and is an ideal such that . Then some power of belongs to . Or, equivalently:   Suppose and are polynomials such that whenever is a zero of each of , is also a zero of . Then for some and some ’s.   In other words, if, starting with the system of equations , adding on has no effect on the solution set, then it is because the new equation is an algebraic consequence of the previous — that is, is an -th root of some -linear combination of the ’s. (Note that the converse is obvious, and holds for any field: if is an algebraic consequence of the previous equations, then adding it to the list has no effect on the solution set.)     Recall that for and , we have that is a radical ideal and yet .  More concretely, the two systems of equations and have the same set of solutions (over ), and yet is not an algebraic consequence of (no power of is a -multiple of ).  The Nullstellensatz tells us that such bad behaviour cannot occur if we changed the field to be . Indeed: and thus     The Strong Nullstellensatz Theorem is a consequence of the following more abstract one:  Abstract Nullstellensatz   For any field and integer , if is any maximal ideal of the polynomial ring , then the canonical map (given as the composition of the inclusion of into followed by the canonical quotient map) is a finite extension of fields.     When , the Abstract Nullstellensatz Theorem is clear, since every maximal ideal of has the form for an irreducible polynomial .    An even more abstract but equivalent form of this theorem is: Given a field extension , if is finitely generated as a -algebra then .   We won’t be proving the Abstract Nullstellensatz, but we will use it to draw some consequences.  For a commutative ring , let denote the set of its maximal ideals.    For an algebraically closed field , every maximal ideal of is of the form for elements . In fact, the function sending to is a bijection.    We will prove this Corollary, taking the Abstract Nullstellensatz on faith.  The function is clearly well-defined (i.e., is a maximal ideal for any choice of ’s) and one-to-one. (If for at least one value of , then and are distinct ideals). The surjectivity uses the Abstract Nullstellensatz:  Let and consider the composition of canonical ring maps . (It is injective since is a field.) By the Abstract Nullstellensatz, it is a finite field extension. But since is algebraically closed, it must be an isomorphism. Let . Then it follows that — i.e., for all . Thus and since the latter is maximal, we must in fact have an equality. ◻     When , the Corollary holds essentially by definition of algebraically closed: If is any maximal ideal of , then for a unique irreducible, monic polynomial . If is algebraically closed, must be linear and thus of the form for some .    The proof shows, more generally, that for any field , there is a bijection between and the subset of those maximal ideals in for which the canonical map of fields is an isomorphism. Such maximal ideals are sometimes called -rational . (When is algebraically closed, every maximal ideal is -rational.)     If is algebraically closed, then for any ideal of , there is a bijection given by sending to .    The function is well defined and one-to-one, since if , then The Nullstellensatz implies it is onto: If then for some , and by the (Corollary to the) Nullstellensatz for some .     Since the Corollary implies that . This holds in greater generality.     If is algebraically closed and is a proper ideal of , then .    Since is proper it is contained in some maximal ideal . (As a technical point, this fact does not require Zorn’s Lemma in this setting, since the ring is noetherian.) So the result follows from the previous Corollary.    Let’s return to the question of what can be said about :    If is algebraically closed and and are two affine varieties in , then .    Since both sides are radical ideals, by the Nullstellensatz it suffices to prove This holds since and .      The Corollary is false over : Take and in . Then and (why?) and hence (since ). But and so .      Given an affine variety , the coordinate ring of , written is the -algebra Some authors denote this as instead.    If is an affine variety and and are two polynomials such that for all , then and hence . This proves:    For any field and any affine variety , the ring is isomorphic to the ring of polynomial functions from to (i.e., those functions from to that may be represented by an element of — it forms a ring using addition and multiplication in ).    Note that is a reduced ring since is a radical ideal. Moreover, provided is algebraically closed, every finitely generated, commutative, reduced -algebra occurs, up to isomorphism, as the coordinate ring of some affine variety: Given such an algebra , being finitely generated as a -algebra means there is a surjection for some , and since is reduced, the kernel is a radical ideal. Taking we have by the Nullstellensatz and hence . The assumption that is algebraically closed is needed here, due to examples such that .  Relative Nullstellensatz   Assume is an algebraically closed field and an affine variety. There is a bijective correspondence between affine subvarieties of and radical ideals of , given by sending to the ideal of .    "
},
{
  "id": "lem122",
  "level": "2",
  "url": "sec-nullstellensatz.html#lem122",
  "type": "Lemma",
  "number": "1.2.1",
  "title": "",
  "body": "  Let be a commutative ring, an element of , and the multiplicatively closed subset of generated by . There is an isomorphism of -algebras given by    "
},
{
  "id": "thm-StrongHN",
  "level": "2",
  "url": "sec-nullstellensatz.html#thm-StrongHN",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "",
  "body": "  Assume is an algebraically closed. Then for any radical ideal of and any affine variety in .  Thus, there is a order-reversing bijection between the poset (under containment) of all affine varieties in and the poset (under containment) of all radical ideals in .    Let now be any ideal of . We need to show that . Pick ; that is, assume is a polynomial such that for every . It suffices to prove in the quotient ring for some , for this implies .  Let be the ideal of generated by (the image of) and . I claim is the empty set: If then and so . But we also have , which is impossible.  Since , by the Weak Nullstellensatz we must have .  Now, by there is an isomorphism of commutative rings, where . We also have the canonical isomorphism Since , this proves that is the trivial ring, and hence in this ring. Thus in for some . ◻   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-nullstellensatz.html#exercise-9",
  "type": "Exploration",
  "number": "1.2.3",
  "title": "",
  "body": " Prove: If is algebraically closed, then for any set of polynomials we have . In particular, for any ideal . Moreover, if is any subset of , is the unique smallest affine variety in that contains .  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-nullstellensatz.html#exercise-10",
  "type": "Exploration",
  "number": "1.2.4",
  "title": "",
  "body": " Prove that holds for all radical ideals if and only if  is algebraically closed.  "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-nullstellensatz.html#remark-2",
  "type": "Remark",
  "number": "1.2.5",
  "title": "",
  "body": " The only new\/non-elementary assertion in the Strong Nullstellensatz This can be rephrased as: Suppose is a polynomial and is an ideal such that . Then some power of belongs to . Or, equivalently:   Suppose and are polynomials such that whenever is a zero of each of , is also a zero of . Then for some and some ’s.   In other words, if, starting with the system of equations , adding on has no effect on the solution set, then it is because the new equation is an algebraic consequence of the previous — that is, is an -th root of some -linear combination of the ’s. (Note that the converse is obvious, and holds for any field: if is an algebraic consequence of the previous equations, then adding it to the list has no effect on the solution set.)  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec-nullstellensatz.html#example-3",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Recall that for and , we have that is a radical ideal and yet .  More concretely, the two systems of equations and have the same set of solutions (over ), and yet is not an algebraic consequence of (no power of is a -multiple of ).  The Nullstellensatz tells us that such bad behaviour cannot occur if we changed the field to be . Indeed: and thus    "
},
{
  "id": "thm-abstract-null",
  "level": "2",
  "url": "sec-nullstellensatz.html#thm-abstract-null",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "Abstract Nullstellensatz.",
  "body": "Abstract Nullstellensatz   For any field and integer , if is any maximal ideal of the polynomial ring , then the canonical map (given as the composition of the inclusion of into followed by the canonical quotient map) is a finite extension of fields.   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-nullstellensatz.html#remark-3",
  "type": "Remark",
  "number": "1.2.8",
  "title": "",
  "body": " When , the Abstract Nullstellensatz Theorem is clear, since every maximal ideal of has the form for an irreducible polynomial .  "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-nullstellensatz.html#remark-4",
  "type": "Remark",
  "number": "1.2.9",
  "title": "",
  "body": " An even more abstract but equivalent form of this theorem is: Given a field extension , if is finitely generated as a -algebra then .  "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "sec-nullstellensatz.html#corollary-2",
  "type": "Corollary",
  "number": "1.2.10",
  "title": "",
  "body": "  For an algebraically closed field , every maximal ideal of is of the form for elements . In fact, the function sending to is a bijection.    We will prove this Corollary, taking the Abstract Nullstellensatz on faith.  The function is clearly well-defined (i.e., is a maximal ideal for any choice of ’s) and one-to-one. (If for at least one value of , then and are distinct ideals). The surjectivity uses the Abstract Nullstellensatz:  Let and consider the composition of canonical ring maps . (It is injective since is a field.) By the Abstract Nullstellensatz, it is a finite field extension. But since is algebraically closed, it must be an isomorphism. Let . Then it follows that — i.e., for all . Thus and since the latter is maximal, we must in fact have an equality. ◻   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-nullstellensatz.html#remark-5",
  "type": "Remark",
  "number": "1.2.11",
  "title": "",
  "body": " When , the Corollary holds essentially by definition of algebraically closed: If is any maximal ideal of , then for a unique irreducible, monic polynomial . If is algebraically closed, must be linear and thus of the form for some .  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-nullstellensatz.html#remark-6",
  "type": "Remark",
  "number": "1.2.12",
  "title": "",
  "body": " The proof shows, more generally, that for any field , there is a bijection between and the subset of those maximal ideals in for which the canonical map of fields is an isomorphism. Such maximal ideals are sometimes called -rational . (When is algebraically closed, every maximal ideal is -rational.)  "
},
{
  "id": "corollary-3",
  "level": "2",
  "url": "sec-nullstellensatz.html#corollary-3",
  "type": "Corollary",
  "number": "1.2.13",
  "title": "",
  "body": "  If is algebraically closed, then for any ideal of , there is a bijection given by sending to .    The function is well defined and one-to-one, since if , then The Nullstellensatz implies it is onto: If then for some , and by the (Corollary to the) Nullstellensatz for some .   "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-nullstellensatz.html#remark-7",
  "type": "Remark",
  "number": "1.2.14",
  "title": "",
  "body": " Since the Corollary implies that . This holds in greater generality.  "
},
{
  "id": "cor-weak-null",
  "level": "2",
  "url": "sec-nullstellensatz.html#cor-weak-null",
  "type": "Corollary",
  "number": "1.2.15",
  "title": "",
  "body": "  If is algebraically closed and is a proper ideal of , then .    Since is proper it is contained in some maximal ideal . (As a technical point, this fact does not require Zorn’s Lemma in this setting, since the ring is noetherian.) So the result follows from the previous Corollary.   "
},
{
  "id": "corollary-5",
  "level": "2",
  "url": "sec-nullstellensatz.html#corollary-5",
  "type": "Corollary",
  "number": "1.2.16",
  "title": "",
  "body": "  If is algebraically closed and and are two affine varieties in , then .    Since both sides are radical ideals, by the Nullstellensatz it suffices to prove This holds since and .   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec-nullstellensatz.html#example-4",
  "type": "Example",
  "number": "1.2.17",
  "title": "",
  "body": "  The Corollary is false over : Take and in . Then and (why?) and hence (since ). But and so .   "
},
{
  "id": "def-coordinate-ring",
  "level": "2",
  "url": "sec-nullstellensatz.html#def-coordinate-ring",
  "type": "Definition",
  "number": "1.2.18",
  "title": "",
  "body": "  Given an affine variety , the coordinate ring of , written is the -algebra Some authors denote this as instead.   "
},
{
  "id": "proposition-6",
  "level": "2",
  "url": "sec-nullstellensatz.html#proposition-6",
  "type": "Proposition",
  "number": "1.2.19",
  "title": "",
  "body": "  For any field and any affine variety , the ring is isomorphic to the ring of polynomial functions from to (i.e., those functions from to that may be represented by an element of — it forms a ring using addition and multiplication in ).   "
},
{
  "id": "cor-rel-null",
  "level": "2",
  "url": "sec-nullstellensatz.html#cor-rel-null",
  "type": "Corollary",
  "number": "1.2.20",
  "title": "Relative Nullstellensatz.",
  "body": "Relative Nullstellensatz   Assume is an algebraically closed field and an affine variety. There is a bijective correspondence between affine subvarieties of and radical ideals of , given by sending to the ideal of .   "
},
{
  "id": "sec-zariski-topology",
  "level": "1",
  "url": "sec-zariski-topology.html",
  "type": "Section",
  "number": "1.3",
  "title": "The Zariski Topology",
  "body": "The Zariski Topology  For simplicity, we will assume is algebraically closed from now on. This is not really needed for many of the statements that follow, but it will be tedious to keep track of which ones really do, and in some cases where it is not needed, the proofs are harder without that assumption.  Recall that a topology on a set is a specified collection of subsets, known as the open subsets , such that (1) is an open subset of , (2) is an open subset of , (3) the intersection of any two open subsets it open, and (4) an arbitrary union of open subsets is open. Such a specified collection of open subsets makes into a topological space . In any topological space, a closed subset is any subset that is the complement of an open one. One may equivalently describe a topology as a collection of specified closed subsets such that (1) is an closed subset of , (2) is an closed subset of , (3) the intersection of an arbitrary collection of closed subsets is closed, and (4) the union of two closed subsets is closed. By what we have proved above about affine varieties, we may define:    Definition 1 . The Zariski topology on is the topology in which a subset is closed if and only if it is an affine variety (i.e., cut out by a collection of polynomial equations). Given a variety in , the Zariski topology on is the subspace topology — since is closed in , this means that a subset of is closed if and only if is an affine subvariety of (i.e., an affine variety in that is contained in ).  So, a subset of is open iff for some ideal (which we may take to be radical), and more generally a subset of an affine variety is open iff it has the form for some ideal in .    Remark 1 . The Zariski topology on is not Hausdorff (provided ). Indeed, the intersection of any two non-empty open sets is non-empty. This is equivalent to the assertion that the union of any two proper closed subset is proper. Using the Nullstellensatz, this is equivalent to the assertion that if and are any two non-zero ideals of then is non-zero, and that holds since is a domain.   Monday, January 30     Proposition 1 . Every affine variety is (quasi-)compact for the Zariski topology — that is, every open cover of by Zariski open subsets admits a finite subcover or, equivalently, if is a collection of closed subsets of such that then for some finite list of indices.    In fact, every open subset of is (quasi-)compact.     Proof. We may translate the first assertion into a statement about ideals in the ring : We need to prove that if is a collection of ideals such that then for some finite sub-collection. This holds since iff iff for some .  I’ll just sketch the proof of the second assertion: Let be an open subset of an affine variety , say for an ideal . We have (Hilbert Basis Theorem), and so . Since this is a finite union, it suffices to show each is quasi-compact. So, without loss, we may assume for some . The points of are in bijective correspondence with the maximal ideals of the ring and the closed subsets are given by ideals of this ring. So, the same proof as in the first part applies. ◻  In the previous proof I used some notation not yet introduced:    Definition 1 . Given an affine variety and element of its coordinate ring, let . Equivalently, if for , then . Define for in the evident way.    Proposition 1 . Every affine variety is noetherian — by definition, this means the poset of its closed subsets satisfies the dcc.     Proof. This holds since has the acc on (radical) ideals. ◻    Example 1 . has dcc on closed subsets since the only proper closed subsets of it finite sets, and clearly every finite set has dcc on closed subsets.    Example 1 . Starting with a surface such as (a paraboloid), a proper closed subset of is a curve on or a point on or a finite union of such. Each (irreducible) curve on has as its only proper closed subsets finite subsets. Accepting these facts (on faith) it is clear has dcc on closed subsets.    Definition 1 . An affine variety is irreducible if it cannot be written non-trivially as a union of closed subsets — that is, is irreducible provided whenever with and affine subvarieties of , we have or .    Example 1 . A single plane in three-space is irreducible, but the union of a plane and a line (not contained in the plane) is reducible.    Example 1 . A surface in three-space is irreducible if and only if is irreducible or a power of an irreducible. This holds in general: The hypersurface in is irreducible if and only if is irreducible or a power of an irreducible.    Exercise 1 . Prove that I just asserted: Assume is a polynomial without repeated factors (so that is a radical ideal). Prove is irreducible if and only if is irreducible.    Exercise 1 . Show an affine variety is irreducible iff every non-empty open subset of is dense in (i.e., the intersection of with any other non-empty open subset of is non-empty).    Proposition 1 . An affine variety is irreducible if and only if is an integral domain. More generally, the collection of irreducible affine subvarieties of a given affine variety is in bijective correspondence with the collection of primes ideals in its coordinate ring.     Proof. If is not irreducible, then for proper closed subsets and of . It follows that , , and . So pick and . Then , proving is not prime.  Suppose is not prime. Then there are polynomials and neither of which is in and yet . Set and and and . Then , and since .  For the second assertion, we already know there is a bijective correspondence between affine subvarieties of an affine variety and radical ideals of , given by . The assertion holds since is prime in if and only if is prime in . ◻    Corollary 1 . Every affine variety is a finite union of irreducible closed subsets, , such that for all . Moreover, the list of such subsets is unique up to ordering, and are known as the irreducible components of .     Proof. This holds since the ring is noetherian and hence has a finite number of minimal primes — we take . ◻    Remark 1 . In general, if is any noetherian topological space (i.e., a space with dcc for closed subsets), then the conclusion of the previous Corollary holds. The existence is given as follows: If is irreducible, then we may take and . If not, then for two proper closed subsets and of . If both and are irreducible, we are done; otherwise we can decompose at least one of them — without loss say it is that decomposes. Then with and closed a proper in . Continuing in the fashion gives a strictly descending chain of closed subsets. By dcc, this process must stop after a finite number of steps, and thus for some irreducible closed subsets . If for some , delete from the list.  I’ll skip a proof of uniqueness.    Example 1 . Consider in . That is is the union of a line and a plane, specifically the -axis and the -plane. Then has two irreducible components, the line and the plane.    Example 1 . For , the irreducible components of are where for and irreducible.   Wednesday, February 1   One particular kind of Zariski open subset is particularly importent:    Definition 1 . A distinguished open subset of an affine variety is an open subset of the form for some element . (We can also think of for .)    Exercise 1 . Let be any affine variety.  Show ; in particular, the intersection of any two distinguished open subsets of is again distinguished.  Show that the collection of distinguished open subsets of form a basis for the Zariski topology on . Recall that a collection of subsets for a set is a basis for a topology if:    for every point there is a with and    whenever for some , there is a such that .    And the topology generated by such a basis is the collection of subsets of that are arbitrary unions of members of . So, you are being asked to show the above two properties hold for the collection of distinguished open sets and that every Zariski open set is a union of distinguished ones.  "
},
{
  "id": "p-128",
  "level": "2",
  "url": "sec-zariski-topology.html#p-128",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition 1 "
},
{
  "id": "p-131",
  "level": "2",
  "url": "sec-zariski-topology.html#p-131",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Monday, January 30 "
},
{
  "id": "p-132",
  "level": "2",
  "url": "sec-zariski-topology.html#p-132",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proposition 1 "
},
{
  "id": "p-137",
  "level": "2",
  "url": "sec-zariski-topology.html#p-137",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition 1 "
},
{
  "id": "p-138",
  "level": "2",
  "url": "sec-zariski-topology.html#p-138",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proposition 1 "
},
{
  "id": "p-140",
  "level": "2",
  "url": "sec-zariski-topology.html#p-140",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-141",
  "level": "2",
  "url": "sec-zariski-topology.html#p-141",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-142",
  "level": "2",
  "url": "sec-zariski-topology.html#p-142",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition 1 "
},
{
  "id": "p-143",
  "level": "2",
  "url": "sec-zariski-topology.html#p-143",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-144",
  "level": "2",
  "url": "sec-zariski-topology.html#p-144",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-145",
  "level": "2",
  "url": "sec-zariski-topology.html#p-145",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exercise 1 "
},
{
  "id": "p-146",
  "level": "2",
  "url": "sec-zariski-topology.html#p-146",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exercise 1 "
},
{
  "id": "p-147",
  "level": "2",
  "url": "sec-zariski-topology.html#p-147",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proposition 1 "
},
{
  "id": "p-151",
  "level": "2",
  "url": "sec-zariski-topology.html#p-151",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Corollary 1 "
},
{
  "id": "p-155",
  "level": "2",
  "url": "sec-zariski-topology.html#p-155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-156",
  "level": "2",
  "url": "sec-zariski-topology.html#p-156",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-157",
  "level": "2",
  "url": "sec-zariski-topology.html#p-157",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Wednesday, February 1 "
},
{
  "id": "p-159",
  "level": "2",
  "url": "sec-zariski-topology.html#p-159",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition 1 "
},
{
  "id": "p-160",
  "level": "2",
  "url": "sec-zariski-topology.html#p-160",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exercise 1 "
},
{
  "id": "sec-dimension",
  "level": "1",
  "url": "sec-dimension.html",
  "type": "Section",
  "number": "1.4",
  "title": "Dimension",
  "body": "Dimension   Definition 1 . The dimension of a noetherian topological space , written , is the supremum of the set of all integers such that there exists a chain with each an irreducible closed subset of . (The dimension of the empty set is . It is possible that the dimension of a noetherian space is infinite.)  Given a closed irreducible subset of , the codimension of in , written , the supremum over all such that a choice of the form     Remark 1 . Note that we only define codimension when is irreducible. When is reducible, sometimes one defines to be the minimum value of where ranges over the irreducible components of .    Remark 1 . Topologize by declaring a subset to be closed if and only if it is of the form for some . Then is a noetherian space but has infinite dimension. There exist noetherian commutative rings such that . (This cannot occur for local rings nor for rings that are finitely generated as -algebras.)    Remark 1 . Observe that every maximal chain of irreducible closed subsets (i.e., every chain that cannot be made longer and inserting new terms) of has equal to an irreducible component of and has equal to a single point. In particular, and     Example 1 . Let , the union of the -axis and the -plane. The dimension of is two. It is clearly at least two, since we have the chain with being any point on the -plane, being any line in this plane and containing this point, and being the whole plane. It is harder to see that it is at most two. This is an example of a variety that fails to be equi-dimensional — the variety has two irreducible components, but they have different dimensions.  Let , the -plane. Then since the only closed subsets strictly between and are given by together with a finite set of points on the line.  Let , the -axis. Then is also by similar reasoning. Since , this is a bit counter-intuitive.  Let . When . It’s at least two since we have the chain ; it is less obvious, but true, that it is exactly two.  According to Remark , what is ?    Example 1 . The dimension of is clearly at least since It is much less obvious that it is exactly .  The following result follows from the fact that there is an order-reversing bijections between primes ideals of and irreducible closed subsets of :    Proposition 1 . The dimension of an affine variety is equal to the Krull dimension of its coordinate ring . The codimension of an irreducible closed subset of is the height of the corresponding prime ideal of .     Remark 1 . Using the definition in Remark , the codimension of an arbitrary closed subset is the height of the corresponding radical ideal.    Theorem 1 (Properties of dimension). Assume is algebraically closed and and are irreducible affine -varieties      We have (see the problem set for the definition of ).      (Catenary property) If then .      (Krull’s Theorem). If is a non-zero, non-unit element of (i.e. ), then every irreducible component of has codimension in (or, equivalently thanks to (b), has dimension ). In particular, .     All of these results are best proven in a class on commutative algebra, and so I’ll just skip their proofs.    Example 1 . If is any non-zero, non-contant polynomial in , then .    Exercise 1 . What goes wrong in this Theorem if we don’t assume and are irreducible?    Corollary 1 . The dimension of is .     Proof. We have and . The latter holds since is a PID. ◻  A special case of the Catenary Property is:    Corollary 1 . For every point of an irreducible variety , we have .   The previous result says that the dimension of an irreducible variety is that same near every point. In algebra terms, it says that if is an integral domain and is a finitely generated -algebra, then is the same for all maximal ideals .    Corollary 1 . Assume is a (not necessarily irreducible) affine variety and let . Let be the decomposition of into its irreducible components and assume they are ordered so that for and for .    If for all (i.e., is not identically zero on any irreducible component of of maximal dimension) and for at least one such that (i.e., has a zero on at least one irreducible component of of maximal dimension), then .    If is equi-dimensional (i.e., ) then is also equi-dimensional.    Friday, February 3     Proof. Since we have   For any such that the Theorem applies (using that ) to give that is equi-dimensional of dimension equal to . If , then by assumption we have and either (a) or (b) , and moreover condition (b) holds for at least one such . It follows that . If , then . The first assertion thus follows from .  If , then for each we have that is either empty or is equi-dimensional of dimension , and it is non-empty for at least one . The second assertion follows. ◻    Example 1 . Take . Let . Then . Why doesn’t this contradict the Corollary? Let . Then . Why doesn’t this contradict the Corollary?  Let . Then the Corollary does apply, and we have .    Example 1 . Note that if and , then . Why does this not contradict Krull’s Theorem?    Example 1 . Say are non-constant polynomials with and assume that and have no common irreducible factors and that . Then .  To see this, recall the irreducible components of are where , and they are each of dimension . The fact that is not a factor of gives that is not identically on , for all . So, the Corollary applies.  "
},
{
  "id": "p-167",
  "level": "2",
  "url": "sec-dimension.html#p-167",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition 1 "
},
{
  "id": "p-172",
  "level": "2",
  "url": "sec-dimension.html#p-172",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-177",
  "level": "2",
  "url": "sec-dimension.html#p-177",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-179",
  "level": "2",
  "url": "sec-dimension.html#p-179",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proposition 1 "
},
{
  "id": "p-181",
  "level": "2",
  "url": "sec-dimension.html#p-181",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Theorem 1 "
},
{
  "id": "p-187",
  "level": "2",
  "url": "sec-dimension.html#p-187",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-188",
  "level": "2",
  "url": "sec-dimension.html#p-188",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exercise 1 "
},
{
  "id": "p-189",
  "level": "2",
  "url": "sec-dimension.html#p-189",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Corollary 1 "
},
{
  "id": "p-192",
  "level": "2",
  "url": "sec-dimension.html#p-192",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Corollary 1 "
},
{
  "id": "p-194",
  "level": "2",
  "url": "sec-dimension.html#p-194",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Corollary 1 "
},
{
  "id": "p-197",
  "level": "2",
  "url": "sec-dimension.html#p-197",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Friday, February 3 "
},
{
  "id": "p-201",
  "level": "2",
  "url": "sec-dimension.html#p-201",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-203",
  "level": "2",
  "url": "sec-dimension.html#p-203",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-204",
  "level": "2",
  "url": "sec-dimension.html#p-204",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "sec-regular-functions",
  "level": "1",
  "url": "sec-regular-functions.html",
  "type": "Section",
  "number": "1.5",
  "title": "Regular Functions",
  "body": "Regular Functions   Definition 1 . The dimension of a noetherian topological space , written , is the supremum of the set of all integers such that there exists a chain with each an irreducible closed subset of . (The dimension of the empty set is . It is possible that the dimension of a noetherian space is infinite.)  Given a closed irreducible subset of , the codimension of in , written , the supremum over all such that a choice of the form     Remark 1 . Note that we only define codimension when is irreducible. When is reducible, sometimes one defines to be the minimum value of where ranges over the irreducible components of .    Remark 1 . Topologize by declaring a subset to be closed if and only if it is of the form for some . Then is a noetherian space but has infinite dimension. There exist noetherian commutative rings such that . (This cannot occur for local rings nor for rings that are finitely generated as -algebras.)    Remark 1 . Observe that every maximal chain of irreducible closed subsets (i.e., every chain that cannot be made longer and inserting new terms) of has equal to an irreducible component of and has equal to a single point. In particular, and     Example 1 . Let , the union of the -axis and the -plane. The dimension of is two. It is clearly at least two, since we have the chain with being any point on the -plane, being any line in this plane and containing this point, and being the whole plane. It is harder to see that it is at most two. This is an example of a variety that fails to be equi-dimensional — the variety has two irreducible components, but they have different dimensions.  Let , the -plane. Then since the only closed subsets strictly between and are given by together with a finite set of points on the line.  Let , the -axis. Then is also by similar reasoning. Since , this is a bit counter-intuitive.  Let . When . It’s at least two since we have the chain ; it is less obvious, but true, that it is exactly two.  According to Remark , what is ?    Example 1 . The dimension of is clearly at least since It is much less obvious that it is exactly .  The following result follows from the fact that there is an order-reversing bijections between primes ideals of and irreducible closed subsets of :    Proposition 1 . The dimension of an affine variety is equal to the Krull dimension of its coordinate ring . The codimension of an irreducible closed subset of is the height of the corresponding prime ideal of .     Remark 1 . Using the definition in Remark , the codimension of an arbitrary closed subset is the height of the corresponding radical ideal.    Theorem 1 (Properties of dimension). Assume is algebraically closed and and are irreducible affine -varieties      We have (see the problem set for the definition of ).      (Catenary property) If then .      (Krull’s Theorem). If is a non-zero, non-unit element of (i.e. ), then every irreducible component of has codimension in (or, equivalently thanks to (b), has dimension ). In particular, .     All of these results are best proven in a class on commutative algebra, and so I’ll just skip their proofs.    Example 1 . If is any non-zero, non-contant polynomial in , then .    Exercise 1 . What goes wrong in this Theorem if we don’t assume and are irreducible?    Corollary 1 . The dimension of is .     Proof. We have and . The latter holds since is a PID. ◻  A special case of the Catenary Property is:    Corollary 1 . For every point of an irreducible variety , we have .   The previous result says that the dimension of an irreducible variety is that same near every point. In algebra terms, it says that if is an integral domain and is a finitely generated -algebra, then is the same for all maximal ideals .    Corollary 1 . Assume is a (not necessarily irreducible) affine variety and let . Let be the decomposition of into its irreducible components and assume they are ordered so that for and for .    If for all (i.e., is not identically zero on any irreducible component of of maximal dimension) and for at least one such that (i.e., has a zero on at least one irreducible component of of maximal dimension), then .    If is equi-dimensional (i.e., ) then is also equi-dimensional.    Friday, February 3     Proof. Since we have   For any such that the Theorem applies (using that ) to give that is equi-dimensional of dimension equal to . If , then by assumption we have and either (a) or (b) , and moreover condition (b) holds for at least one such . It follows that . If , then . The first assertion thus follows from .  If , then for each we have that is either empty or is equi-dimensional of dimension , and it is non-empty for at least one . The second assertion follows. ◻    Example 1 . Take . Let . Then . Why doesn’t this contradict the Corollary? Let . Then . Why doesn’t this contradict the Corollary?  Let . Then the Corollary does apply, and we have .    Example 1 . Note that if and , then . Why does this not contradict Krull’s Theorem?    Example 1 . Say are non-constant polynomials with and assume that and have no common irreducible factors and that . Then .  To see this, recall the irreducible components of are where , and they are each of dimension . The fact that is not a factor of gives that is not identically on , for all . So, the Corollary applies.  "
},
{
  "id": "p-206",
  "level": "2",
  "url": "sec-regular-functions.html#p-206",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition 1 "
},
{
  "id": "p-211",
  "level": "2",
  "url": "sec-regular-functions.html#p-211",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-216",
  "level": "2",
  "url": "sec-regular-functions.html#p-216",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-218",
  "level": "2",
  "url": "sec-regular-functions.html#p-218",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proposition 1 "
},
{
  "id": "p-220",
  "level": "2",
  "url": "sec-regular-functions.html#p-220",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Theorem 1 "
},
{
  "id": "p-226",
  "level": "2",
  "url": "sec-regular-functions.html#p-226",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-227",
  "level": "2",
  "url": "sec-regular-functions.html#p-227",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exercise 1 "
},
{
  "id": "p-228",
  "level": "2",
  "url": "sec-regular-functions.html#p-228",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Corollary 1 "
},
{
  "id": "p-231",
  "level": "2",
  "url": "sec-regular-functions.html#p-231",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Corollary 1 "
},
{
  "id": "p-233",
  "level": "2",
  "url": "sec-regular-functions.html#p-233",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Corollary 1 "
},
{
  "id": "p-236",
  "level": "2",
  "url": "sec-regular-functions.html#p-236",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Friday, February 3 "
},
{
  "id": "p-240",
  "level": "2",
  "url": "sec-regular-functions.html#p-240",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-242",
  "level": "2",
  "url": "sec-regular-functions.html#p-242",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "p-243",
  "level": "2",
  "url": "sec-regular-functions.html#p-243",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example 1 "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
