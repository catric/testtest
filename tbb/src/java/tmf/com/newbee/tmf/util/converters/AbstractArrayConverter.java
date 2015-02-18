/*
 * $Header: /BIGZPFB/websrc/src/java/com/dm/wmf/util/converters/AbstractArrayConverter.java,v 1.1 2005/11/27 03:08:02 hsn Exp $
 * $Revision: 74 $
 * $Date: 2008-06-10 15:51:52 +0800 (星期二, 10 六月 2008) $
 *
 * ====================================================================
 *
 * The Apache Software License, Version 1.1
 *
 * Copyright (c) 1999-2003 The Apache Software Foundation.  All rights
 * reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. The end-user documentation included with the redistribution, if
 *    any, must include the following acknowlegement:
 *       "This product includes software developed by the
 *        Apache Software Foundation (http://www.apache.org/)."
 *    Alternately, this acknowlegement may appear in the software itself,
 *    if and wherever such third-party acknowlegements normally appear.
 *
 * 4. The names "The Jakarta Project", "Commons", and "Apache Software
 *    Foundation" must not be used to endorse or promote products derived
 *    from this software without prior written permission. For written
 *    permission, please contact apache@apache.org.
 *
 * 5. Products derived from this software may not be called "Apache"
 *    nor may "Apache" appear in their names without prior written
 *    permission of the Apache Group.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED.  IN NO EVENT SHALL THE APACHE SOFTWARE FOUNDATION OR
 * ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF
 * USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
 * OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 * ====================================================================
 *
 * This software consists of voluntary contributions made by many
 * individuals on behalf of the Apache Software Foundation.  For more
 * information on the Apache Software Foundation, please see
 * <http://www.apache.org/>.
 *
 */

package com.newbee.tmf.util.converters;

import java.io.IOException;
import java.io.StreamTokenizer;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.ConversionException;
import org.apache.commons.beanutils.Converter;

/**
 * <p>
 * Convenience base class for converters that translate the String
 * representation of an array into a corresponding array of primitives object.
 * This class encapsulates the functionality required to parse the String into a
 * list of String elements that can later be individually converted to the
 * appropriate primitive type.
 * </p>
 * 
 * <p>
 * The input syntax accepted by the <code>parseElements()</code> method is
 * designed to be compatible with the syntax used to initialize arrays in a Java
 * source program, except that only String literal values are supported. For
 * maximum flexibility, the surrounding '{' and '}' characters are optional, and
 * individual elements may be separated by any combination of whitespace and
 * comma characters.
 * </p>
 * 
 * @author Craig R. McClanahan
 * @version $Revision: 74 $ $Date: 2008-06-10 15:51:52 +0800 (星期二, 10 六月 2008) $
 * @since 1.4
 */

public abstract class AbstractArrayConverter implements Converter {

  // ----------------------------------------------------- Instance Variables

  /**
   * The default value specified to our Constructor, if any.
   */
  protected Object defaultValue = null;

  /**
   * <p>
   * Model object for string arrays.
   * </p>
   */
  protected static String strings[] = new String[0];

  /**
   * Should we return the default value on conversion errors?
   */
  protected boolean useDefault = true;

  // --------------------------------------------------------- Public Methods

  /**
   * Convert the specified input object into an output object of the specified
   * type. This method must be implemented by a concrete subclass.
   * 
   * @param type
   *          Data type to which this value should be converted
   * @param value
   *          The input value to be converted
   * 
   * @exception ConversionException
   *              if conversion cannot be performed successfully
   */
  public abstract Object convert(Class type, Object value);

  // ------------------------------------------------------ Protected Methods

  /**
   * <p>
   * Parse an incoming String of the form similar to an array initializer in the
   * Java language into a <code>List</code> individual Strings for each
   * element, according to the following rules.
   * </p>
   * <ul>
   * <li>The string must have matching '{' and '}' delimiters around a
   * comma-delimited list of values.</li>
   * <li>Whitespace before and after each element is stripped.
   * <li>If an element is itself delimited by matching single or double quotes,
   * the usual rules for interpreting a quoted String apply.</li>
   * </ul>
   * 
   * @param svalue
   *          String value to be parsed
   * 
   * @exception ConversionException
   *              if the syntax of <code>svalue</code> is not syntactically
   *              valid
   * @exception NullPointerException
   *              if <code>svalue</code> is <code>null</code>
   */
  protected List parseElements(String svalue) {

    // Validate the passed argument
    if (svalue == null) {
      throw new NullPointerException();
    }

    // Trim any matching '{' and '}' delimiters
    svalue = svalue.trim();
    if (svalue.startsWith("{") && svalue.endsWith("}")) {
      svalue = svalue.substring(1, svalue.length() - 1);
    }

    try {

      // Set up a StreamTokenizer on the characters in this String
      StreamTokenizer st = new StreamTokenizer(new StringReader(svalue));
      st.whitespaceChars(',', ','); // Commas are delimiters
      st.ordinaryChars('0', '9'); // Needed to turn off numeric flag
      st.ordinaryChars('.', '.');
      st.ordinaryChars('-', '-');
      st.wordChars('0', '9'); // Needed to make part of tokens
      st.wordChars('.', '.');
      st.wordChars('-', '-');

      // Split comma-delimited tokens into a List
      ArrayList list = new ArrayList();
      while (true) {
        int ttype = st.nextToken();
        if ((ttype == StreamTokenizer.TT_WORD) || (ttype > 0)) {
          list.add(st.sval);
        } else if (ttype == StreamTokenizer.TT_EOF) {
          break;
        } else {
          throw new ConversionException("Encountered token of type " + ttype);
        }
      }

      // Return the completed list
      return (list);

    } catch (IOException e) {

      throw new ConversionException(e);

    }

  }

}
